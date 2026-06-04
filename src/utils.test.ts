import assert from "node:assert/strict";
import { test } from "node:test";
import { parseRemote } from "./utils.js";

test("parseRemote: SSH url", () => {
  const result = parseRemote("git@github.com:user/repo.git");
  assert.equal(result.host, "github.com");
  assert.equal(result.owner, "user");
  assert.equal(result.repo, "repo");
});

test("parseRemote: HTTPS url", () => {
  const result = parseRemote("https://github.com/user/repo.git");
  assert.equal(result.host, "github.com");
  assert.equal(result.owner, "user");
  assert.equal(result.repo, "repo");
});

test("parseRemote: SSH config alias (e.g. github.com-work)", () => {
  const result = parseRemote("git@github.com-work:user/repo.git");
  assert.equal(result.host, "github.com");
  assert.equal(result.owner, "user");
  assert.equal(result.repo, "repo");
});
