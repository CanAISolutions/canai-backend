const reverseStrategyTemplate = `
You're a business strategist known for reverse engineering growth.

Break down what a winning company in {{marketRegion}} would do if their goal was to: {{goal}}

This strategy is for a brand called "{{bizName}}". The voice should be {{tone}}.

Include:
- Assumptions / Constraints
- Revenue Levers
- High-ROI Marketing Tactics
- Risk-Averse Growth Loops
- Brand Psychology Angles

Frame your answer as if you’re reverse-engineering a future success story.

Be clever, detailed, and brutally helpful.
`.trim();

export default reverseStrategyTemplate;