# node-env-types

🌀 This package generates the typescript types for environment variables by reading your `.env` file.

<p align="center" width="50%">
<img src="https://github.com/CrispenGari/node-env-types/blob/main/logo.png" alt="logo" width="200"/>
</p>

> Note that this package also loads newly added `environmental` variables when you restart your typescript server.

### Installation

You can install this package using different package manager as a `dev` dependency.

1. using `yarn`

```shell
yarn add -D node-env-types
```

2. using `npm`

```shell
npm i --save-dev node-env-types
```

### Usage

After installing this package you can use it as follows:

```ts
import loadEvTypes from 'node-env-types'
import process = 'process'

createEnvTypes(process.cwd(), {
  filename: ".env", // the path name of the file that contains your environmental variables
});

```

> We recommend to call the `createEnvTypes(rootPath: string, options?: Options)` just at soon after your imports. Note that `env-types` will be generated after you have run the code for the first time and you must have an `.env` file or equivalent in your project.

### Console output

The during generation of `env-types` you can see the output on the console which looks similar to this:

```shell
 *** loading environment variables from C:\Users\crisp\OneDrive\Documents\npm\node-env-types\.env.

 *** created env-types at C:\Users\crisp\OneDrive\Documents\npm\node-env-types\env.d.ts.
```

### Parameters

The `createEnvTypes` takes two parameters which are both optional,

1. `rootPath` - types of string where your `.env` file will be located and the default is your current working directory `process.cwd()`.

2. `options` - type `Option` which is an object of options.

### Options

<table>
<thead>
<tr>
<th>Option</th><th>Description</th><th>Default Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>filename</td><td>This is optional, for example ypu can load your environmental variables from a file called .env-prod. If not provided the default will be used.</td><td>.env</td>
</tr>
<tr>
<td>outputPath</td><td>This defines the path where you want your declarative typescript file to be outputed during types generations.</td><td>process.cwd()</td>
</tr>
</tbody>
</table>

### Common problems

- Sometimes you may not get `auto-completion` even if you have generated the `.d.ts` file. All you have to do is to open your `tsconfig.json` file under `includes` make sure that your `.d.ts` file is there in the array for example in my `env.d.ts` which is generated in the root i can have `includes` array to look as follows:

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
