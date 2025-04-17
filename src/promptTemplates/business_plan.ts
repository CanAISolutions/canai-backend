const businessPlanTemplate = `
You're a world-class business strategist and startup advisor.

Create a detailed business plan for "{{bizName}}" targeting the {{marketRegion}} market.

The business is aiming to: {{goal}}

Write the plan in a confident, informative, and {{tone}} tone.

Sections required:
1. Executive Summary
2. Company Overview
3. Market Opportunity
4. Product or Service Offering
5. Revenue Model
6. Competitive Advantage
7. Go-to-Market Strategy
8. Financial Projections (text format)
9. Team & Vision

Use headers, short paragraphs, and formatting to improve readability.
`.trim();

export default businessPlanTemplate;
