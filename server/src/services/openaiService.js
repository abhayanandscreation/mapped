import OpenAI from 'openai';

let openaiClient = null;

const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('OPENAI_API_KEY is not configured on the server');
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey });
  }

  return openaiClient;
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
5. Suggest resume-worthy, production-grade projects rather than generic beginner tutorial apps (e.g. no basic todo lists or calculators).
6. Provide concrete interview preparation advice (technical screener, system design, or coding questions) when asked.
7. Keep answers actionable, direct, and structured. Avoid generic motivational filler or corporate buzzwords.
8. Do not invent or assume user information that is not in the context.
9. Format responses clearly with clean Markdown bullet points, steps, and bold emphasis where appropriate.`;
};

export const generateCareerAdvice = async (message, context = {}) => {
  const client = getOpenAIClient();

  const systemPrompt = buildSystemPrompt(context);

  // Build input conversation items for the OpenAI Responses API
  const input = [];

  if (Array.isArray(context.chatHistory)) {
    // Include last up to 6 messages for conversation context
    const recentHistory = context.chatHistory.slice(-6);
    for (const msg of recentHistory) {
      if (msg.text && (msg.sender === 'user' || msg.sender === 'ai')) {
        input.push({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        });
      }
    }
  }

  // Add the current user message
  input.push({
    role: 'user',
    content: message
  });

  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  // Use the official OpenAI Responses API (client.responses.create)
  let reply = '';
  try {
    const response = await client.responses.create({
      model,
      instructions: systemPrompt,
      input,
      temperature: 0.7,
      max_output_tokens: 800
    });

    reply = response.output_text?.trim();

    // Fallback extraction if output_text was not directly populated
    if (!reply && Array.isArray(response.output)) {
      for (const item of response.output) {
        if (item.type === 'message' && Array.isArray(item.content)) {
          for (const c of item.content) {
            if (c.type === 'output_text' && c.text) {
              reply = c.text.trim();
              break;
            }
          }
        }
      }
    }
  } catch (responsesErr) {
    // If the Responses API encounters an unsupported endpoint or model error, fall back to chat.completions
    if (responsesErr.status === 404 || responsesErr.code === 'unsupported_model' || responsesErr.code === 'not_found') {
      const messages = [
        { role: 'system', content: systemPrompt },
        ...input.map((item) => ({ role: item.role === 'assistant' ? 'assistant' : 'user', content: item.content }))
      ];
      const completion = await client.chat.completions.create({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 800
      });
      reply = completion.choices[0]?.message?.content?.trim();
    } else {
      throw responsesErr;
    }
  }

  if (!reply) {
    throw new Error('Received empty response from OpenAI');
  }

  return reply;
};
