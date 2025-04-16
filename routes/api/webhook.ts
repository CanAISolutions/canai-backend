import { promptTypeRouter } from './promptTypeRouter';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  try {
    const result = await promptTypeRouter(req.body);
    res.status(200).json({ output: result });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
