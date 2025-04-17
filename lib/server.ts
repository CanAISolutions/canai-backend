import express from "express";
import cors from "cors";
import { handlePromptGeneration } from "./openaiHandler";
import { PromptInput } from "./types";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  const input = req.body as PromptInput;

  try {
    const result = await handlePromptGeneration(input);
    res.status(200).json({ output: result });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Prompt generation failed" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`CanAI backend running on port ${PORT}`));
