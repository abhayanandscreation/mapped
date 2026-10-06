/*import { generateCareerAdvice } from '../services/openaiService.js';

export const handleChatMessage = async (req, res, next) => {
  try {
    const { message, context } = req.body || {};

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'A valid non-empty message is required'
      });
    }

    const reply = await generateCareerAdvice(message.trim(), context || {});

    return res.status(200).json({
      success: true,
      reply
    });
  } catch (error) {
    if (error.message && error.message.includes('OPENAI_API_KEY')) {
      return res.status(503).json({
        success: false,
        error: 'OpenAI API key is not configured on the server',
        code: 'OPENAI_KEY_MISSING'
      });
    }

    if (error.status === 401 || error.code === 'invalid_api_key') {
      return res.status(401).json({
        success: false,
        error: 'Invalid OpenAI API key provided',
        code: 'INVALID_API_KEY'
      });
    }

    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        error: 'OpenAI rate limit or quota exceeded',
        code: 'RATE_LIMIT'
      });
    }

    next(error);
  }
};*/
import { generateCareerAdvice } from '../services/geminiService.js';

export const handleChatMessage = async (req, res, next) => {
  try {
    const { message, context } = req.body || {};

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'A valid non-empty message is required'
      });
    }

    const reply = await generateCareerAdvice(message.trim(), context || {});

    return res.status(200).json({
      success: true,
      reply
    });
  } catch (error) {
    if (error.message && error.message.includes('GEMINI_API_KEY')) {
      return res.status(503).json({
        success: false,
        error: 'Gemini API key is not configured on the server',
        code: 'GEMINI_KEY_MISSING'
      });
    }

    if (
      error.status === 401 ||
      error.code === 'UNAUTHENTICATED' ||
      error.code === 'INVALID_ARGUMENT'
    ) {
      return res.status(401).json({
        success: false,
        error: 'Invalid Gemini API key provided',
        code: 'INVALID_API_KEY'
      });
    }

    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        error: 'Gemini rate limit or quota exceeded',
        code: 'RATE_LIMIT'
      });
    }

    next(error);
  }
};
