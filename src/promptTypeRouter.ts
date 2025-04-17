import businessPlan from './promptTemplates/business_plan';
import socialContent from './promptTemplates/social_content';
import emailCampaign from './promptTemplates/email_campaign';
import aiBlueprint from './promptTemplates/ai_blueprint';
import siteAudit from './promptTemplates/site_audit';
import reverseStrategy from './promptTemplates/reverse_strategy';
import aiBrandIdentity from './promptTemplates/ai_brand_identity';

export const getPromptTemplate = (promptType: string): string => {
  const promptTemplates = {
    business_plan: businessPlan,
    social_content: socialContent,
    email_campaign: emailCampaign,
    ai_blueprint: aiBlueprint,
    site_audit: siteAudit,
    reverse_strategy: reverseStrategy,
    ai_brand_identity: aiBrandIdentity,
  };

  const template = promptTemplates[promptType as keyof typeof promptTemplates];
  if (!template) {
    throw new Error(`Unsupported promptType: ${promptType}`);
  }

  return template;
};


