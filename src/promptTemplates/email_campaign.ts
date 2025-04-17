const emailCampaignTemplate = `
You're an expert in email marketing and persuasive copywriting.

Create a 3-part email sequence for "{{bizName}}" with a goal to: {{goal}}
Target audience is in {{marketRegion}}.
Use a {{tone}} voice.

Sequence:
1. Curiosity & Hook (Email 1)
2. Value & Proof (Email 2)
3. Offer & CTA (Email 3)

Include subject lines and preview text.
Use formatting, clear CTA language, and keep the emails concise.
Make it feel personal and benefit-focused.
`.trim();

export default emailCampaignTemplate;
