Example of using `vite-plugin-ssr` with React and Redux, to demonstrate the error that occurs on server-side execution of the react-live-runner module.

```bash
pnpm install
pnpm run build
```

Observe:

```
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
    at Ib (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:72:155)
    at W (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
    at Ib (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:67:482)
    at W (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
    at Ib (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:67:482)
    at W (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
    at Ib (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:71:304)
    at W (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
    at Ib (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:67:482)
    at W (/home/romu/tmp/vite-ssr-redux-react-live-runner-example/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js:73:89)
```
