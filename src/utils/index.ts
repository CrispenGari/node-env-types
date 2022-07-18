export const commentRegEx = new RegExp(/^#/);

export const isComment = (line: string): boolean => commentRegEx.test(line);

export const startWithExport = (line: string): boolean =>
  new RegExp(/^export/i).test(line);

export const isValidVariableName = (variable: string): boolean =>
  new RegExp(/[a-zA-Z_]+[a-zA-Z0-9_]*/).test(variable);

export const isMultiLineVar = (line: string): boolean =>
  new RegExp(/"""|'''/).test(line);
