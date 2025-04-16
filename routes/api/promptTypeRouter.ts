import { composeBusinessPlanPrompt } from '../../lib/composePrompt';

export async function promptTypeRouter(input: any): Promise<string> {
  const { promptType } = input;

  switch (promptType) {
    case 'business_plan':
      return await composeBusinessPlanPrompt(input);

    default:
      return "Sorry, but I can't assist with that.";
  }
}

