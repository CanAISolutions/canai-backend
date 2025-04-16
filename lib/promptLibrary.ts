export const promptLibrary = {
  business_plan: { systemPrompt: "You are a professional {{region}} business consultant...", template: "Write a business plan for {{bizName}} in the {{industry}} sector..." },
  email_campaign: { systemPrompt: "You are a high-conversion email strategist in {{region}}...", template: "Create a campaign for {{bizName}} targeting {{audience}}..." },
  social_content: { systemPrompt: "You are a top-tier {{region}} social media strategist...", template: "Generate 5 posts for {{bizName}} with tone {{tone}}..." },
  ai_blueprint: { systemPrompt: "You are an AI Systems Architect in {{region}}...", template: "Build a roadmap for {{bizName}} using GPT..." },
  site_audit: { systemPrompt: "You are a UX strategist in {{region}}...", template: "Audit the site at {{businessURL}} for challenge: {{challenge}}..." },
  reverse_strategy: { systemPrompt: "You are a reverse strategist in {{region}}...", template: "Reverse engineer the outcome: {{successOutcome}} for challenge: {{challenge}}..." },
  brand_identity: { systemPrompt: "You are a brand identity expert in {{region}}...", template: "Create a tone + tagline system for {{bizName}}..." },
  test: { systemPrompt: "You are a helpful assistant in {{region}}...", template: "Test prompt for {{bizName}} in {{marketRegion}}..." }
};
