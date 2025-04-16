import { composePrompt } from '../../lib/composePrompt';
import { handleOpenAIRequest } from '../../lib/openaiHandler';
import { promptLibrary } from '../../lib/promptLibrary';

interface Payload {
  promptType: keyof typeof promptLibrary;
  marketRegion?: string;
  [key: string]: any;
}

export async function promptTypeRouter(payload: Payload) {
  const { promptType = 'test' as keyof typeof promptLibrary, marketRegion = 'Canada', ...vars } = payload;
  const template = promptLibrary[promptType] || promptLibrary['test'];

  const systemPrompt = template.systemPrompt.replace('{{region}}', marketRegion);
  const userPrompt = composePrompt(template.template, vars);
  const fullPrompt = `${systemPrompt}\n\n${userPrompt}`;
  
  return await handleOpenAIRequest(fullPrompt);
}
