import { GoogleGenAI } from '@google/genai';

let geminiClient = null;

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    throw new Error('GEMINI_API_KEY is not configured on the server');
  }

  if (!geminiClient) {
    geminiClient = new GoogleGenAI({ apiKey });
  }

  return geminiClient;
};

const buildSystemPrompt = (context = {}) => {
  const {
    targetRole = 'Software Engineer',
    currentSkills = [],
    completedTopicIds = [],
    readinessScore = 0,
    streakDays = 0,
    activityHistory = []
  } = context;

  return `You are MAPPED Career Mentor, a practical, high-impact career navigation mentor for software developers and college students.

CORE MAPPED PHILOSOPHY:
"Guide where the learner is, skip what they already know, and recommend what they should learn next."

USER PROFILE & CAREER CONTEXT:
- Target Role: ${targetRole}
- Current Verified Skills: ${currentSkills.length > 0 ? currentSkills.join(', ') : 'None listed yet'}
- Completed Roadmap Topics: ${completedTopicIds.length > 0 ? completedTopicIds.join(', ') : 'None listed yet'} (${completedTopicIds.length} topics completed)
- Current Job Readiness Score: ${readinessScore}%
- Daily Learning Streak: ${streakDays} days
${activityHistory.length > 0 ? `- Recent Milestones: ${activityHistory.slice(0, 3).map(a => a.text).join('; ')}` : ''}

CRITICAL MENTORING RULES:
1. Always ground your guidance in the user's selected Target Role (${targetRole}) and Current Skills.
2. DO NOT waste time teaching or recommending syntax or basics for skills the user ALREADY knows (${currentSkills.join(', ')}). Explicitly acknowledge that they can skip those basics.
3. Identify missing critical skills and explain why they are needed for real-world production or hiring.
4. Recommend the single next highest-leverage learning step with realistic time estimates in days/weeks.
5. Suggest resume-worthy, production-grade projects rather than generic beginner tutorial apps.
6. Provide concrete interview preparation advice when asked.
7. Keep answers actionable, direct, and structured. Avoid generic motivational filler.
8. Do not invent or assume user information that is not in the context.
9. Format responses clearly with clean Markdown bullet points, steps, and bold emphasis where appropriate.`;
};

export const generateCareerAdvice = async (message, context = {}) => {
  const client = getGeminiClient();
  const systemPrompt = buildSystemPrompt(context);

  const contents = [];

  if (Array.isArray(context.chatHistory)) {
    const recentHistory = context.chatHistory.slice(-6);

    for (const msg of recentHistory) {
      if (msg.text && (msg.sender === 'user' || msg.sender === 'ai')) {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }
    }
  }

  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite';

  const response = await client.models.generateContent({
    model,
    contents,
    config: {
      systemInstruction: systemPrompt,
      temperature: 0.7,
      maxOutputTokens: 800
    }
  });

  const reply = response.text?.trim();

  if (!reply) {
    throw new Error('Received empty response from Gemini');
  }

  return reply;
};
