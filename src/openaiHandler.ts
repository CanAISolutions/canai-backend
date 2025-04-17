import OpenAI from "openai";
import { PromptInput } from "./types";
import { composePrompt } from "./composePrompt";

// Securely access your API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const handlePromptGeneration = async (input: PromptInput) => {
  const fullPrompt = composePrompt(input);
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: fullPrompt }],
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
};
