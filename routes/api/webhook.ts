import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { promptTypeRouter } from './promptTypeRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/webhook', async (req: Request, res: Response) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  try {
    const result = await promptTypeRouter(req.body);
    res.status(200).json({ output: result });
  } catch (e) {
    console.error('❌ GPT Routing Error:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (_req: Request, res: Response) => {
  res.send('✅ CanAI Router is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 CanAI Router running at http://localhost:${PORT}`);
});
