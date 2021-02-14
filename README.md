# Repro test for a bug in webpack when having more than one worker

To reproduce:
1. Checkout the code.
2. `npm install`
3. `npm run build`
4. Check the generated `main*.js` files, search for `__webpack_require__.u`, and notice the following code:

```javascript
/******/                __webpack_require__.u = (chunkId) => {
/******/                        // return url for filenames based on template
/******/                        return "" + chunkId + "." + undefined + ".js";
/******/                };
```

That `undefined` is a problem, because it means the web worker name won't resolve. It should be the hash of the file instead.