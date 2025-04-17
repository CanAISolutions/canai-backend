import { PromptInput } from "./types";
import { getPromptTemplate } from "./promptTypeRouter";

export const composePrompt = ({ promptType, inputs, marketRegion }: PromptInput): string => {
  const template = getPromptTemplate(promptType);

  const withRegion = template.replace(/{{marketRegion}}/g, marketRegion || "Canada");

  return Object.entries(inputs).reduce((prompt, [key, value]) => {
    const placeholder = `{{${key}}}`;
    return prompt.replace(new RegExp(placeholder, "g"), value || "");
  }, withRegion);
};
