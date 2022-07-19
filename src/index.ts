import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { Options } from "./types";
import { isComment, isValidVariableName, startWithExport } from "./utils";

const createEnvTypes = (rootPath?: string, options?: Options) => {
  /**
   * rootPath: string
   * - this is the base path of your project where your .env file will be located
   */

  if (!rootPath) {
    rootPath = process.cwd();
  }
  const fileName: string = options?.filename ? options?.filename : ".env";

  let envPath: string = join(rootPath, fileName);

  console.log(` *** loading environment variables from ${envPath}.`);

  let outputFileName = options?.outputPath
    ? join(options?.outputPath, "env.d.ts")
    : join(rootPath, "env.d.ts");

  const data: string = readFileSync(envPath, { encoding: "utf8" })
    .replace(/("""|''').*?\1/gs, "")
    .trim();

  let variables: Array<string> = [];
  for (const line of data.split(/\n/)) {
    if (!isComment(line)) {
      if (startWithExport(line)) {
        if (line.trim().length !== 0) {
          const _var: string = line.split(/=/)[0].trim().split(/\s/)[1];
          if (isValidVariableName(_var)) {
            variables.push(_var);
          } else {
            throw new Error(
              `There's an invalid variable name in your ${fileName} file.`
            );
          }
        }
      } else {
        if (line.indexOf("=") === -1 && line.trim().length !== 0) {
          throw new Error(`Invalid syntax in your ${fileName} file.`);
        } else {
          if (line.trim().length !== 0) {
            const _var: string = line.split(/=/)[0].trim();
            if (isValidVariableName(_var)) {
              variables.push(_var);
            } else {
              throw new Error(
                `There's an invalid variable name in your ${fileName} file.`
              );
            }
          }
        }
      }
    }
  }
  variables = variables.filter((v) => v.length >= 1);

  variables = [...new Set(variables)];

  const outPutText: string = `
  // types for your environmental variables
  declare namespace NodeJS {
    export interface ProcessEnv {
      ${variables.map((v, i) => {
        if (i === 0) {
          return v + " : string;\n";
        } else {
          return "\t\t\t" + v + " : string;\n";
        }
      })}
    }
  }
  `.replace(/,/gim, "");

  writeFileSync(outputFileName, outPutText);
  console.log(`\n *** created env-types at ${outputFileName}.\n`);
};

process.env.
createEnvTypes();
export default createEnvTypes;
