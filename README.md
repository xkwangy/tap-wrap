# tap-wrap

Test runners like [SlimerJS](http://slimerjs.org/) don't automatically
exit when tests are finished, and they don't output useful return
values. This module wraps Slimer and any other runner that runs
TAP tests, kills the subprocess when tests are done, and exits
with an informative error code.

## usage

```sh
$ tap-wrap slimerjs tests.js
```

Or in package.json:

```json
"test": "tap-wrap slimerjs tests.js"
```

## install

    npm install --save-dev tap-wrap
