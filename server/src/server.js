import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoutes from './routes/health.js';
import chatRoutes from './routes/chat.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  process.env.FRONTEND_URL
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // In non-production, be permissive for local testing
    if (process.env.NODE_ENV !== 'production' && origin.startsWith('http://localhost:')) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', healthRoutes);
app.use('/api', chatRoutes);

// Error Handling
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`[Mapped API Server] running on http://localhost:${PORT}`);
  console.log(`[CORS] Allowed Origins:`, allowedOrigins);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const fallbackPort = Number(PORT) === 5000 ? 5001 : Number(PORT) + 1;
    console.warn(`[Mapped API Server] Port ${PORT} is occupied (commonly by macOS AirPlay Receiver). Retrying on fallback port ${fallbackPort}...`);
    const fallbackServer = app.listen(fallbackPort, () => {
      console.log(`[Mapped API Server] running on http://localhost:${fallbackPort}`);
      console.log(`[CORS] Allowed Origins:`, allowedOrigins);
    });
    fallbackServer.on('error', (fallbackErr) => {
      console.error('[Mapped API Server] Fatal startup error:', fallbackErr);
    });
  } else {
    console.error('[Mapped API Server] Fatal error:', err);
  }
});

export default app;
