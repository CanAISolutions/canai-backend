import { PromptType } from "./types";
import businessPlan from "./promptTemplates/business_plan";
import socialContent from "./promptTemplates/social_content";
import emailCampaign from "./promptTemplates/email_campaign";
import aiBlueprint from "./promptTemplates/ai_blueprint";
import siteAudit from "./promptTemplates/site_audit";
import reverseStrategy from "./promptTemplates/reverse_strategy";
import customPrompt from "./promptTemplates/custom_prompt";

export const getPromptTemplate = (type: PromptType): string => {
  switch (type) {
    case "business_plan":
      return businessPlan;
    case "social_content":
      return socialContent;
    case "email_campaign":
      return emailCampaign;
    case "ai_blueprint":
      return aiBlueprint;
    case "site_audit":
      return siteAudit;
    case "reverse_strategy":
      return reverseStrategy;
    case "custom_prompt":
      return customPrompt;
    default:
      throw new Error("Unsupported prompt type");
  }
};

