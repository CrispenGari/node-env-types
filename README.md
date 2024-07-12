### node-env-types

🌀 This package generates the typescript types for environment variables by reading your `.env` file.

<p align="center" width="50%">
<img src="https://github.com/CrispenGari/node-env-types/blob/main/logo.png?raw=true" alt="logo" width="200"/>
</p>

<p align="center">
  <a href="https://npmjs.com/package/node-env-types"><img src="https://img.shields.io/npm/v/node-env-types.svg"></a>
  <a href="https://github.com/crispengari/node-env-types/actions/workflows/ci.yml"><img src="https://github.com/crispengari/node-env-types/actions/workflows/main.yml/badge.svg"></a>
  <a href="https://github.com/crispengari/node-env-types/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/node-env-types.svg?maxAge=2592000"></a>
<a href="https://img.shields.io/node/v/node-env-types.svg?label=node"><img src="https://img.shields.io/node/v/node-env-types.svg?label=node"></a>
  <a href="https://npmjs.com/package/node-env-types"><img src="https://img.shields.io/npm/dm/node-env-types.svg"></a>
  <a href="https://typescriptlang.org/"><img src="https://img.shields.io/badge/language-typescript-blue.svg"></a>
</p>

> **Note:** This package also loads newly added environmental variables when you restart your TypeScript server.
>
> ## Table of Contents

- [node-env-types](#node-env-types)
- [Installation](#installation)
- [Usage](#usage)
- [Console output](#console-output)
- [Parameters](#parameters)
- [Options](#options)
- [Common problems](#common-problems)
- [Languages](#languages)
- [License](#license)

### Installation

You can install this package using different package managers as a `dev` dependency.

1. Using `yarn`:

   ```shell
   yarn add -D node-env-types
   ```

2. Using `npm`:

   ```shell
   npm i --save-dev node-env-types
   ```

3. Using `pnpm`:

   ```shell
   pnpm add -D node-env-types
   ```

4. Using `bun`:

   ```shell
   bun add -d node-env-types
   ```

### Usage

After installing this package you can use it as follows:

```ts
import load from 'node-env-types'
import process = 'process'

load(process.cwd(), {
  filename: ".env", // the path name of the file that contains your environmental variables
});

```

> We recommend calling `createEnvTypes(rootPath: string, options?: Options)` immediately after your imports. Note that `env-types` will be generated after you run the code for the first time, and you must have an `.env` file or equivalent in your project.

Alternatively you can load environmental variables for the default `.env` file as follows without even calling the load function as follows:

```ts
import "node-env-types/load";
```

### Console output

The during generation of `env-types` you can see the output on the console which looks similar to this:

```shell
 *** loading environment variables from C:\Users\crisp\OneDrive\Documents\npm\node-env-types\.env.

 *** created env-types at C:\Users\crisp\OneDrive\Documents\npm\node-env-types\env.d.ts.
```

### Parameters

The `createEnvTypes` function takes two optional parameters:

1. `rootPath` - A string indicating the directory path where your `.env` file is located. The default value is the current working directory (`process.cwd()`).

2. `options` - An optional object of type `Options` containing additional configuration options.

### Options

| Option       | Description                                                                                                                                       | Default Value   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `filename`   | This is optional, for example you can load your environmental variables from a file called `.env-prod`. If not provided the default will be used. | `.env`          |
| `outputPath` | This defines the path where you want your declarative TypeScript file to be output during types generation.                                       | `process.cwd()` |

### Common problems

- Sometimes you may not get **auto-completion** even if you have generated the `.d.ts` file. All you have to do is to open your `tsconfig.json` file, go to `includes`, and make sure that your `.d.ts` file is listed there. For example, if your `env.d.ts` file is generated in the root directory, your `includes` array in `tsconfig.json` should look like this:

```json
{
  "compilerOptions": {},
  "include": [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "src/configs/test.ts",
    "env.d.ts"
  ]
}
```

Alternatively you can pass an empty array or point to the `root` folder of your project instead of `src` as follows:

```json
{
  "compilerOptions": {},
  "include": ["./**/*.tsx", "./**/*.ts", "src/configs/test.ts", "env.d.ts"]
}
```

- Before calling the `createEnvTypes()` functions make sure that you have a `.env` file in your root project of your folder, this is the default file `node-env-types` will be looking for, If environment variables are named differently, make sure that you specify the correct `filename` in the options.

### Languages

This package is intended to be used by developers who codes in `typescript`.

### License

In this package I'm using the `MIT` license which reads as follows:

```
MIT License

Copyright (c) 2022 crispengari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
