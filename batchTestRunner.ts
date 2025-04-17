import { composePrompt } from "./src/composePrompt";
import { PromptInput } from "./src/types";
import fs from "fs";
import path from "path";

const testCases: PromptInput[] = [
  {
    promptType: "business_plan",
    marketRegion: "Canada",
    inputs: {
      bizName: "CanAI Solutions",
      industry: "AI Services",
      keyOfferings: "Email campaigns, business plans, AI strategy",
      modelType: "Service",
      audience: "Canadian SMBs",
      goal: "Generate recurring revenue",
      constraints: "No sales team",
      success: "10K MRR",
      problemSolved: "Lack of affordable automation",
      differentiator: "Fully automated, personalized, local",
      revenueModel: "One-time & subscription",
      competitors: "Fiverr, Upwork, consultants",
      channels: "Organic, referrals",
      tone: "Professional"
    }
  },
  {
    promptType: "social_content",
    marketRegion: "Canada",
    inputs: {
      bizName: "CanAI Solutions",
      goal: "Boost awareness of new AI content pack",
      tone: "Friendly"
    }
  },
  {
    promptType: "email_campaign",
    marketRegion: "Canada",
    inputs: {
      bizName: "CanAI Solutions",
      goal: "Get early adopters for launch offer",
      tone: "Helpful"
    }
  },
  {
    promptType: "ai_blueprint",
    marketRegion: "Canada",
    inputs: {
      bizName: "CanAI Solutions",
      goal: "Outline a scalable backend using GPT-4o",
      tone: "Direct"
    }
  },
  {
    promptType: "site_audit",
    marketRegion: "Canada",
    inputs: {
      bizName: "CanAI Solutions",
      goal: "Improve homepage clarity and conversions",
      tone: "Constructive"
    }
  },
  {
    promptType: "reverse_strategy",
    marketRegion: "Canada",
    inputs: {
      bizName: "CanAI Solutions",
      goal: "Grow to $100K MRR with no paid ads",
      tone: "Bold"
    }
  },
  {
    promptType: "ai_brand_identity",
    marketRegion: "Canada",
    inputs: {
      bizName: "CanAI Solutions",
      goal: "Build a confident and empowering brand for SMB AI",
      tone: "Empowering"
    }
  }
];

console.log("🧪 Running batch tests on all 7 prompt types...\n");

fs.mkdirSync("output", { recursive: true });

for (const testCase of testCases) {
  try {
    const output = composePrompt(testCase);

    console.log(`✅ ${testCase.promptType} output:\n`);
    console.log(output);

    const tokenCount = Math.round(output.split(/\s+/).length / 0.75);
    console.log(`🔢 Estimated tokens: ${tokenCount}`);

    const outputPath = path.join("output", `${testCase.promptType}.md`);
    fs.writeFileSync(outputPath, output, "utf8");
    console.log(`📄 Saved to ${outputPath}`);

    console.log("\n" + "=".repeat(80) + "\n");
  } catch (err: any) {
    console.error(`❌ ${testCase.promptType} failed: ${err.message}`);
  }
}
