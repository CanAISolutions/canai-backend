import { composePrompt } from "./src/composePrompt";
import request from "./request.json";
import { PromptInput } from "./src/types";

try {
  const input = request as PromptInput;
  console.log("⏳ Running composePrompt...");
  const result = composePrompt(input);
  console.log("\n✅ Final Output:\n", result);
} catch (err: any) {
  console.error("\n❌ Error:", err.message);
}

