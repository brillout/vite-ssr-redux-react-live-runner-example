Example of using `vite-plugin-ssr` with React and Redux, to demonstrate the error that occurs on server-side execution of the react-live-runner module.

```bash
pnpm install
pnpm run build
```

> - [reprod-2](https://github.com/brillout/vite-ssr-redux-react-live-runner-example/tree/reprod-2) for another reproduction.
> - [fix](https://github.com/brillout/vite-ssr-redux-react-live-runner-example/tree/fix) for the fix.

Observe:

```
import { LiveProvider, LiveEditor } from "react-live-runner";
                       ^^^^^^^^^^
SyntaxError: Named export 'LiveEditor' not found. The requested module 'react-live-runner' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'react-live-runner';
const { LiveProvider, LiveEditor } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:131:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:213:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async pageFile.loadFile (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/vite-plugin-ssr@0.4.131_vite@4.3.9/node_modules/vite-plugin-ssr/dist/cjs/shared/getPageFiles/parseGlobResults.js:35:40)
    at async Promise.all (index 0)
    at async loadPageFilesServerSide (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/vite-plugin-ssr@0.4.131_vite@4.3.9/node_modules/vite-plugin-ssr/dist/cjs/shared/getPageFiles/analyzePageServerSide/loadPageFilesServerSide.js:10:5)
    at async Promise.all (index 0)
    at async loadPageFilesServer (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/vite-plugin-ssr@0.4.131_vite@4.3.9/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/renderPage/loadPageFilesServer.js:15:110)
    at async /home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/vite-plugin-ssr@0.4.131_vite@4.3.9/node_modules/vite-plugin-ssr/dist/cjs/node/prerender/runPrerender.js:247:48
```
