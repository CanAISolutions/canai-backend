const aiBlueprintTemplate = `
You're an expert AI Systems Architect.

Design an AI-powered solution for "{{bizName}}" with a goal to: {{goal}}

This will serve a business operating in {{marketRegion}}.
Use a {{tone}} tone to explain clearly but insightfully.

Deliver a full blueprint including:
- Problem & AI Opportunity Summary
- High-Level Solution Overview
- Tools / Models / APIs Recommended
- Workflow Breakdown
- Risks & Tradeoffs
- Example Use Case Flow

Write like you're advising a founder preparing to brief a technical team.
`.trim();

export default aiBlueprintTemplate;

