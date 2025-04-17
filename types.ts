export type PromptType =
  | "business_plan"
  | "social_content"
  | "email_campaign"
  | "ai_blueprint"
  | "site_audit"
  | "reverse_strategy"
  | "custom_prompt";

export interface PromptInput {
  promptType: PromptType;
  marketRegion: string; // NEW – injected for localization
  inputs: Record<string, string>;
}
