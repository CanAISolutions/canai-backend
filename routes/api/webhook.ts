import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { promptTypeRouter } from './promptTypeRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Main webhook route
app.post('/api/webhook', (req: Request, res: Response) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  promptTypeRouter(req.body)
    .then((result) => res.status(200).json({ output: result }))
    .catch((e) => {
      console.error('Error handling webhook request:', e);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Start server (only if not imported)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 CanAI Router running on port ${PORT}`);
});

