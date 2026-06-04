import assert from "node:assert/strict";
import { test } from "node:test";
import { buildRemoteUrl, getRemoteUrl } from "./commands.js";

test("buildRemoteUrl: produces a valid github blob url", () => {
  const remote = getRemoteUrl();
  const url = buildRemoteUrl({ remote, filePath: "src/commands.ts" });
  assert.match(url, /^https:\/\/github\.com\/.+\/.+\/blob\/.+\/src\/commands\.ts$/);
});
