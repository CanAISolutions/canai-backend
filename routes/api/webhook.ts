import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { promptTypeRouter } from './promptTypeRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ POST route using inferred types (avoids TS2769)
app.post('/api/webhook', (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  promptTypeRouter(req.body)
    .then((result) => res.status(200).json({ output: result }))
    .catch((e) => {
      console.error('❌ GPT Routing Error:', e);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// ✅ Optional health check
app.get('/', (_, res) => {
  res.send('✅ CanAI Router is live!');
});

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 CanAI Router running at http://localhost:${PORT}`);
});

