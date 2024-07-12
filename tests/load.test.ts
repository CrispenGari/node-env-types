import { describe, expect, test } from "@jest/globals";
import loadE from "../src";
import path from "path";
import fs from "fs";

loadE(process.cwd(), {
  filename: ".hello.env",
});
loadE(process.cwd(), {
  filename: ".hello.env",
});

describe("Testing if environmental variables", () => {
  test("if the env.d.ts has been created", () => {
    const generated = path.resolve(path.join(process.cwd(), "env.d.ts"));
    const e = fs.existsSync(generated);
    expect(e).toBe(true);
  });
  test("if they will be loaded correctly", () => {
    const generated = path.resolve(path.join(process.cwd(), "env.d.ts"));
    const content = fs.readFileSync(generated, { encoding: "utf-8" }).trim();
    expect(content).toBe(
      `
  // types for your environmental variables
  declare namespace NodeJS {
    export interface ProcessEnv {
      NAME : string;
			SUBJECT : string;
			PORT : string;

    }
  }
    `.trim()
    );
  });
});
