import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
const out = mkdtempSync(join(tmpdir(), "rtt-tests-"));
try {
  const compile = spawnSync(
    process.execPath,
    [
      "node_modules/typescript/bin/tsc",
      "--outDir",
      out,
      "--rootDir",
      "lib",
      "--module",
      "commonjs",
      "--target",
      "es2020",
      "--strict",
      "--skipLibCheck",
      "lib/challenge/engine.ts",
      "lib/challenge/codec.ts",
      "lib/challenge/storage.ts",
      "lib/challenge/sharing.ts",
      "lib/challenge/analytics.ts",
    ],
    { stdio: "inherit" },
  );
  if (compile.status !== 0) process.exitCode = compile.status || 1;
  else
    process.exitCode =
      spawnSync(process.execPath, ["--test", "tests/challenge.cjs"], {
        env: { ...process.env, RTT_TEST_BUILD: out },
        stdio: "inherit",
      }).status || 0;
} finally {
  rmSync(out, { recursive: true, force: true });
}
