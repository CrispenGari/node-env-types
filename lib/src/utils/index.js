"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMultiLineVar = exports.isValidVariableName = exports.startWithExport = exports.isComment = exports.commentRegEx = void 0;
exports.commentRegEx = new RegExp(/^#/);
const isComment = (line) => exports.commentRegEx.test(line);
exports.isComment = isComment;
const startWithExport = (line) => new RegExp(/^export/i).test(line);
exports.startWithExport = startWithExport;
const isValidVariableName = (variable) => new RegExp(/[a-zA-Z_]+[a-zA-Z0-9_]*/).test(variable);
exports.isValidVariableName = isValidVariableName;
const isMultiLineVar = (line) => new RegExp(/"""|'''/).test(line);
exports.isMultiLineVar = isMultiLineVar;
//# sourceMappingURL=index.js.map