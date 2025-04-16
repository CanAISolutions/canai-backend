import { composePrompt } from '../../lib/composePrompt';
import { openaiHandler } from '../../lib/openaiHandler';
import { promptLibrary } from '../../lib/promptLibrary';

export async function promptTypeRouter(payload) {
  const { promptType = 'test', marketRegion = 'Canada', ...vars } = payload;
  const template = promptLibrary[promptType] || promptLibrary['test'];

  const userPrompt = composePrompt(template.template, {
    ...vars,
    marketRegion
  });

  const systemPrompt = template.systemPrompt.replace('{{region}}', marketRegion);
  return await openaiHandler(systemPrompt, userPrompt);
}
