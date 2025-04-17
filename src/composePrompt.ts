import { PromptInput } from "./types";
import { getPromptTemplate } from "./promptTypeRouter";

export const composePrompt = ({ promptType, inputs, marketRegion }: PromptInput): string => {
  const template = getPromptTemplate(promptType);
  const withRegion = template.replace(/{{marketRegion}}/g, marketRegion || "Canada");

  // Smart fallback injector
  const injected = {
    goal: "accomplish an important business objective using AI",
    tone: "professional",
    ...inputs,
    marketRegion: marketRegion || "Canada"
  };

  const finalPrompt = Object.entries(injected).reduce((prompt, [key, value]) => {
    const placeholder = `{{${key}}}`;
    return prompt.replace(new RegExp(placeholder, "g"), value || "");
  }, withRegion);

  return finalPrompt;
};

