import { ActivityItem, ChatMessage } from '../types';

export interface SendChatMessageParams {
  message: string;
  currentSkills: string[];
  targetRole: string;
  completedTopicIds?: string[];
  readinessScore?: number;
  streakDays?: number;
  activityHistory?: ActivityItem[];
  chatHistory?: ChatMessage[];
}

export interface ChatResponse {
  success: boolean;
  reply: string;
  error?: string;
  source?: 'backend' | 'mock-fallback';
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000').replace(/\/+$/, '');

/**
 * Send a chat message with full MAPPED career context to the Node/Express backend.
 * Uses native fetch with timeout support.
 */
export async function sendChatMessage(params: SendChatMessageParams): Promise<ChatResponse> {
  const {
    message,
    currentSkills,
    targetRole,
    completedTopicIds = [],
    readinessScore = 0,
    streakDays = 0,
    activityHistory = [],
    chatHistory = []
  } = params;

  // Use AbortController for a 20-second timeout (handles cold starts)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000);

  try {
    let response: Response;
    try {
      response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          message,
          context: {
            targetRole,
            currentSkills,
            completedTopicIds,
            readinessScore,
            streakDays,
            activityHistory,
            chatHistory: chatHistory.slice(-6)
          }
        })
      });
    } catch (primaryFetchErr) {
      // If primary localhost:5000 failed and port was 5000, try local fallback port 5001
      if (API_BASE_URL.includes(':5000')) {
        const fallbackUrl = API_BASE_URL.replace(':5000', ':5001');
        response = await fetch(`${fallbackUrl}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
          body: JSON.stringify({
            message,
            context: {
              targetRole,
              currentSkills,
              completedTopicIds,
              readinessScore,
              streakDays,
              activityHistory,
              chatHistory: chatHistory.slice(-6)
            }
          })
        });
      } else {
        throw primaryFetchErr;
      }
    }

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error || `Server responded with status ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return {
      success: true,
      reply: data.reply,
      source: 'backend'
    };
  } catch (error: any) {
    clearTimeout(timeoutId);

    const isAbort = error.name === 'AbortError';
    const messageText = isAbort
      ? 'Request timed out after 20 seconds'
      : (error.message || 'Network error');

    // Return structured failure so the caller can trigger mock fallback cleanly
    return {
      success: false,
      reply: '',
      error: messageText,
      source: 'mock-fallback'
    };
  }
}
