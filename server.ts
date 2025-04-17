import express from "express";
import { composePrompt } from "./src/composePrompt";

const app = express();
app.use(express.json());

app.post("/generate", (req, res) => {
  try {
    const prompt = composePrompt(req.body);
    res.status(200).send({ prompt });
  } catch (err: any) {
    res.status(400).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 CanAI backend running on port ${PORT}`);
});


