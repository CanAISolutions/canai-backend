import { describe, it, expect } from "vitest";
import { composePrompt } from "../src/composePrompt";
import { PromptInput } from "../src/types";

describe("composePrompt()", () => {
  it("should generate a full business plan prompt", () => {
    const input: PromptInput = {
      promptType: "business_plan",
      marketRegion: "Canada",
      inputs: {
        bizName: "CanAI Solutions",
        goal: "Scale AI offerings for SMBs",
        tone: "professional"
      }
    };

    const output = composePrompt(input);

    expect(output).toContain("CanAI Solutions");
    expect(output).toContain("Scale AI offerings");
    expect(output).toContain("Canada");
    expect(output).not.toContain("{{");
  });

  it("should inject default tone if missing", () => {
    const input: PromptInput = {
      promptType: "email_campaign",
      marketRegion: "Canada",
      inputs: {
        bizName: "TestCo",
        goal: "launch to first 100 users"
      }
    };

    const output = composePrompt(input);

    expect(output).toContain("TestCo");
    expect(output).toContain("launch to first 100 users");
    expect(output).toContain("professional"); // fallback
  });

  it("should default goal if not provided", () => {
    const input: PromptInput = {
      promptType: "reverse_strategy",
      marketRegion: "Canada",
      inputs: {
        bizName: "GrowthX",
        tone: "edgy"
      }
    };

    const output = composePrompt(input);

    expect(output).toContain("GrowthX");
    expect(output).toContain("edgy");
    expect(output).toContain("accomplish an important business objective"); // fallback goal
  });
});
