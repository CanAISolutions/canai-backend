# 🧠 CanAI Solutions – GPT Prompt Engine (v6.1.1)

A scalable, testable, zero-manual-touch prompt engine powering 7 productized AI services using GPT-4o.

Built with automation, modularity, and developer excellence in mind.

---

## 📦 Key Features

- 🔁 Modular prompt system (`composePrompt()`)
- 🧠 GPT templates per productType (`/promptTemplates`)
- 🧪 Automated test suite with `vitest`
- 💰 Token + cost estimator
- 📄 Markdown + CSV output for QA and logging
- 🔐 Secure `.env`-based secret handling
- 🌐 Webhook-ready for Make.com, Webflow, Klaviyo, etc.
- 🚀 Fully deployable to Render

---

## 📁 File Structure

```
/src
  /promptTemplates        → 7 dynamic product templates
  /utils                  → tokenEstimator, logger
  composePrompt.ts        → Merges template + inputs
  promptTypeRouter.ts     → Maps promptType to template
  types.ts                → Shared PromptInput type
server.ts                 → Express webhook endpoint
batchTestRunner.ts        → Smoke test all product types
/test                     → Unit tests using vitest
/output                   → Markdown + CSV logs
.env.local                → API key (gitignored)
```

---

## 🧑‍💻 Getting Started

Install dependencies:

```bash
npm install
```

Run full batch test:

```bash
npx ts-node batchTestRunner.ts
```

Run unit tests:

```bash
npm run test
```

Start local server:

```bash
npx ts-node server.ts
```

Send POST request to:

```
http://localhost:3001/generate
```

Example payload:

```json
{
  "promptType": "business_plan",
  "marketRegion": "Canada",
  "inputs": {
    "bizName": "CanAI Solutions",
    "goal": "Scale AI for SMBs",
    "tone": "Professional"
  }
}
```

---

## 🔐 Environment Variables

Create a file named `.env.local`:

```
OPENAI_API_KEY=sk-xxx
```

This file is **already gitignored** to keep your key secure.

---

## 🌍 Render Deployment

Recommended Render settings:

| Setting           | Value                        |
|------------------|------------------------------|
| Build Command    | `npm install`                |
| Start Command    | `npx ts-node server.ts`      |
| Port             | `3001`                       |
| Environment Key  | `OPENAI_API_KEY=sk-...`      |

You may also use this `render.yaml`:

```yaml
services:
  - type: web
    name: canai-router
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npx ts-node server.ts
    envVars:
      - key: OPENAI_API_KEY
        value: sk-...
```

---

## 🔎 Utilities

- `tokenEstimator.ts` → Predict token usage + cost before GPT call
- `promptLogger.ts` → Logs output to `output/qa_log.csv` for review or fine-tuning

---

## 🧠 Dev Best Practices

- Add prompt templates in `/promptTemplates`
- Route them via `promptTypeRouter.ts`
- Log and test them via `batchTestRunner.ts` or `composePrompt.test.ts`
- Validate token use before calling GPT
- Keep `.env.local` out of version control (already ignored)

---

## 🏁 Closing

Built for:
- 🚫 Zero manual touch
- 🧪 Full test visibility
- 📦 Scalable prompt delivery
- 🧠 High-performance developer collaboration

> “Build once, run forever.”  
© CanAI Solutions — Powered by OpenAI GPT-4o, Render, and love.