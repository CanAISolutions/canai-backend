import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { promptTypeRouter } from './promptTypeRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// POST route for AI router
app.post('/api/webhook', async (req: Request, res: Response) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  try {
    const result = await promptTypeRouter(req.body);
    res.status(200).json({ output: result });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Health check (optional but helpful for Render)
app.get('/', (_, res) => {
  res.send('✅ CanAI Router is running');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 CanAI Router live at http://localhost:${PORT}`);
});

