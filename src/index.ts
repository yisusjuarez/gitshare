#!/usr/bin/env node
import { buildRemoteUrl, getRemoteUrl } from "./commands.js";

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: gitshare <file>");
  process.exit(1);
}

const remote = getRemoteUrl();
console.log(buildRemoteUrl({ remote, filePath }));
