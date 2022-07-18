"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const utils_1 = require("./utils");
const createEnvTypes = (rootPath = process.cwd(), options) => {
    const fileName = (options === null || options === void 0 ? void 0 : options.filename) ? options === null || options === void 0 ? void 0 : options.filename : ".env";
    let envPath = (0, path_1.join)(rootPath, fileName);
    console.log(` *** loading environment variables from ${envPath}.`);
    let outputFileName = (options === null || options === void 0 ? void 0 : options.outputPath)
        ? (0, path_1.join)(options === null || options === void 0 ? void 0 : options.outputPath, "env.d.ts")
        : (0, path_1.join)(rootPath, "env.d.ts");
    const data = (0, fs_1.readFileSync)(envPath, { encoding: "utf8" })
        .replace(/("""|''').*?\1/gs, "")
        .trim();
    let variables = [];
    for (const line of data.split(/\n/)) {
        if (!(0, utils_1.isComment)(line)) {
            if ((0, utils_1.startWithExport)(line)) {
                if (line.trim().length !== 0) {
                    const _var = line.split(/=/)[0].trim().split(/\s/)[1];
                    if ((0, utils_1.isValidVariableName)(_var)) {
                        variables.push(_var);
                    }
                    else {
                        throw new Error(`There's an invalid variable name in your ${fileName} file.`);
                    }
                }
            }
            else {
                if (line.indexOf("=") === -1 && line.trim().length !== 0) {
                    throw new Error(`Invalid syntax in your ${fileName} file.`);
                }
                else {
                    if (line.trim().length !== 0) {
                        const _var = line.split(/=/)[0].trim();
                        if ((0, utils_1.isValidVariableName)(_var)) {
                            variables.push(_var);
                        }
                        else {
                            throw new Error(`There's an invalid variable name in your ${fileName} file.`);
                        }
                    }
                }
            }
        }
    }
    variables = variables.filter((v) => v.length >= 1);
    variables = [...new Set(variables)];
    const outPutText = `
  // types for your environmental variables
  declare namespace NodeJS {
    export interface ProcessEnv {
      ${variables.map((v, i) => {
        if (i === 0) {
            return v + " : string;\n";
        }
        else {
            return "\t\t\t" + v + " : string;\n";
        }
    })}
    }
  }
  `.replace(/,/gim, "");
    (0, fs_1.writeFileSync)(outputFileName, outPutText);
    console.log(`\n *** created env-types at ${outputFileName}.\n`);
};
exports.default = createEnvTypes;
//# sourceMappingURL=index.js.map