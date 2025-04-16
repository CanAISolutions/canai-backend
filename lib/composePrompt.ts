import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function composeBusinessPlanPrompt(input: {
  challenge: string;
  tone: string;
  marketRegion: string;
}): Promise<string> {
  const { challenge, tone, marketRegion } = input;

  const systemPrompt = `You are a strategic business consultant who writes clear, compelling AI-generated business plans tailored to each user's tone and region.`;

  const userPrompt = `Write a business plan to help a company in ${marketRegion} with the following challenge: "${challenge}". The tone should be ${tone}. Make it detailed, practical, and written in clean paragraphs.`;

  const chat = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  });

  return chat.choices[0].message.content ?? "No response generated.";
}
