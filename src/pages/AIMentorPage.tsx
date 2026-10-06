import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  ArrowRight,
  User,
  Bot
} from 'lucide-react';
import { useCareer } from '../context/CareerContext';
import { SUGGESTED_PROMPTS, getMockAIResponse } from '../data/aiMockData';
import { sendChatMessage } from '../services/aiService';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';

const normalizeMarkdown = (text: string) => {
  return text.replace(/\\([#*_`])/g, '$1');
};

export const AIMentorPage: React.FC = () => {
  const {
    currentSkills,
    targetRole,
    completedTopicIds,
    activityHistory,
    streakDays,
    calculateJobReadiness,
    chatHistory,
    addChatMessage
  } = useCareer();

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();

    if (!text || isTyping) return;

    // Add user message immediately
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    addChatMessage(userMsg);
    setInputText('');
    setIsTyping(true);

    try {
      const readinessScore = calculateJobReadiness();

      const response = await sendChatMessage({
        message: text,
        currentSkills,
        targetRole,
        completedTopicIds,
        readinessScore,
        streakDays,
        activityHistory,
        chatHistory
      });

      if (response.success && response.reply) {
        const aiMsg: ChatMessage = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: response.reply,
          timestamp: 'Just now',
        };

        addChatMessage(aiMsg);
      } else {
        // Fallback to local MAPPED guidance
        console.warn(
          '[AI Mentor]: Live call unsuccessful, using MAPPED local guidance fallback:',
          response.error
        );

        const fallbackMsg = getMockAIResponse(
          text,
          currentSkills,
          targetRole
        );

        addChatMessage(fallbackMsg);
      }
    } catch (err) {
      console.warn(
        '[AI Mentor]: Unexpected error, falling back to local guidance:',
        err
      );

      const fallbackMsg = getMockAIResponse(
        text,
        currentSkills,
        targetRole
      );

      addChatMessage(fallbackMsg);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream text-deep pb-20 flex flex-col">

      {/* Mentor Header */}
      <div className="bg-deep text-cream py-10 sm:py-14 border-b border-brown/30 shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-card border border-brown/40 text-xs font-mono font-semibold text-burnt-light mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Adaptive Career Strategist
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold font-editorial text-cream">
                Mapped AI
              </h1>

              <p className="text-xs sm:text-sm text-cream/70 mt-1">
                "Your personal career guide."
              </p>
            </div>

            {/* Context Badge */}
            <div className="bg-deep-surface p-3 rounded-xl border border-brown/30 text-xs font-mono space-y-1">
              <div className="text-cream/60 text-[10px] uppercase">
                Active Mentorship Context
              </div>

              <div className="text-cream font-bold">
                🎯 {targetRole}
              </div>

              <div className="text-burnt-light text-[11px] truncate max-w-[200px]">
                Skills: {currentSkills.slice(0, 3).join(', ')}...
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Chat Workspace */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col justify-between">

        {/* Suggested Quick Prompt Cards */}
        <div className="mb-6">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brown mb-2 block">
            Suggested Strategic Inquiries:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="p-2.5 rounded-xl bg-cream-card hover:bg-cream-dark border border-brown/25 text-left text-xs font-medium text-deep hover:text-burnt hover:border-burnt/50 transition-all flex items-center justify-between group shadow-warm-sm"
              >
                <span className="line-clamp-1">{prompt}</span>

                <ArrowRight className="w-3.5 h-3.5 text-brown/40 group-hover:text-burnt transition-transform group-hover:translate-x-0.5 shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 bg-cream-card/60 border border-brown/25 rounded-2xl p-4 sm:p-6 overflow-y-auto space-y-6 max-h-[500px] shadow-warm">

          {chatHistory.map((msg) => {
            const isUser = msg.sender === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-3 items-start ${
                  isUser ? 'flex-row-reverse' : 'flex-row'
                }`}
              >

                {/* Avatar Icon */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 shadow-sm ${
                    isUser
                      ? 'bg-brown text-cream'
                      : 'bg-burnt text-cream'
                  }`}
                >
                  {isUser ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 sm:p-5 text-sm leading-relaxed ${
                    isUser
                      ? 'bg-deep text-cream rounded-tr-none'
                      : 'bg-cream text-deep border border-brown/20 rounded-tl-none shadow-warm-sm'
                  }`}
                >

                  {/* Sender & Timestamp */}
                  <div className="flex items-center justify-between gap-4 mb-2 pb-1.5 border-b border-current/10 text-[11px] font-mono opacity-70">
                    <span className="font-bold uppercase">
                      {isUser ? 'You' : 'Mapped AI Strategist'}
                    </span>

                    <span>{msg.timestamp}</span>
                  </div>

                  {/* Message Body */}
                  <div className="font-sans">

                    {isUser ? (
                      <div className="whitespace-pre-line">
                        {msg.text}
                      </div>
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => (
                            <p className="mb-3 last:mb-0">
                              {children}
                            </p>
                          ),

                          h1: ({ children }) => (
                            <h1 className="text-lg font-bold mb-3">
                              {children}
                            </h1>
                          ),

                          h2: ({ children }) => (
                            <h2 className="text-base font-bold mb-2">
                              {children}
                            </h2>
                          ),

                          h3: ({ children }) => (
                            <h3 className="text-sm font-bold mb-2">
                              {children}
                            </h3>
                          ),

                          strong: ({ children }) => (
                            <strong className="font-bold">
                              {children}
                            </strong>
                          ),

                          ul: ({ children }) => (
                            <ul className="list-disc pl-5 mb-3 space-y-1">
                              {children}
                            </ul>
                          ),

                          ol: ({ children }) => (
                            <ol className="list-decimal pl-5 mb-3 space-y-1">
                              {children}
                            </ol>
                          ),

                          li: ({ children }) => (
                            <li>{children}</li>
                          ),

                          code: ({ children }) => (
                            <code className="px-1.5 py-0.5 rounded bg-brown/10 font-mono text-xs">
                              {children}
                            </code>
                          ),

                          blockquote: ({ children }) => (
                            <blockquote className="border-l-2 border-burnt pl-3 my-3 italic text-deep/80">
                              {children}
                            </blockquote>
                          ),

                          a: ({ children, href }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-burnt underline hover:text-burnt-hover"
                            >
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {normalizeMarkdown(msg.text)}
                      </ReactMarkdown>
                    )}

                  </div>

                  {/* Structured Path Recommendations if present */}
                  {msg.pathRecommendation && (
                    <div className="mt-4 pt-3 border-t border-brown/20 space-y-2">

                      <span className="text-[11px] font-mono font-bold uppercase text-burnt block">
                        Recommended Milestone Sprint:
                      </span>

                      <div className="space-y-1.5">
                        {msg.pathRecommendation.map((step, idx) => (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-lg text-xs font-mono flex items-center justify-between ${
                              step.highlight
                                ? 'bg-burnt/15 border border-burnt/40 text-deep font-bold'
                                : 'bg-cream-dark/60 text-deep/80 border border-brown/15'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-burnt">
                                {step.step}.
                              </span>

                              <span>{step.title}</span>
                            </span>

                            <span className="text-brown/70 shrink-0 ml-2">
                              {step.duration}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                  {/* Verdict badge if present */}
                  {msg.verdict && (
                    <div className="mt-3 p-2 rounded-lg bg-burnt/10 border border-burnt/20 text-xs font-mono text-burnt font-semibold">
                      💡 {msg.verdict}
                    </div>
                  )}

                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-3">

              <div className="w-8 h-8 rounded-lg bg-burnt text-cream flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>

              <div className="bg-cream border border-brown/20 rounded-2xl rounded-tl-none px-4 py-3 text-xs font-mono text-deep/70 flex items-center gap-2 shadow-warm-sm">

                <span className="w-2 h-2 rounded-full bg-burnt animate-bounce" />

                <span className="w-2 h-2 rounded-full bg-burnt animate-bounce [animation-delay:0.2s]" />

                <span className="w-2 h-2 rounded-full bg-burnt animate-bounce [animation-delay:0.4s]" />

                <span className="ml-1">
                  Synthesizing personalized advice...
                </span>

              </div>
            </div>
          )}

          <div ref={messagesEndRef} />

        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="mt-4 flex items-center gap-2"
        >

          <textarea
            rows={1}
            placeholder="Ask about roadmaps, interview readiness, projects, or skill gaps..."
            value={inputText}
            disabled={isTyping}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 bg-cream-card border border-brown/30 rounded-xl px-4 py-3 text-sm text-deep placeholder-deep/40 focus:outline-none focus:border-burnt focus:ring-1 focus:ring-burnt transition-all shadow-warm-sm resize-none disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="bg-burnt hover:bg-burnt-hover disabled:opacity-50 text-cream p-3.5 rounded-xl font-bold uppercase tracking-wider shadow-warm transition-all flex items-center justify-center shrink-0 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>

        </form>

      </div>
    </div>
  );
};