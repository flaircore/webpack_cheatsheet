ABOUT:
------
Basic minimal configuration for webpack to compile scss, sass, es6 (with browsers support),
assets(images/files), reactjs(jsx), vue, and typescript.


Initial
---------

`yarn add webpack webpack-cli webpack-dev-server -D`

Docs: https://webpack.js.org/guides/getting-started/#basic-setup

css, scss, sass ....
--------------

`yarn add css-loader mini-css-extract-plugin -D`

`yarn add sass sass-loader -D`

Docs: https://webpack.js.org/loaders/css-loader/

https://webpack.js.org/plugins/mini-css-extract-plugin/#root

https://webpack.js.org/loaders/sass-loader/


Transpile es6+ to the set browser support...
------------------------------------------

`yarn add babel-loader @babel/core @babel/preset-env -D`

Docs: https://webpack.js.org/loaders/babel-loader/

Docs: https://babeljs.io/docs/en/babel-preset-env


older browsers support for modern css...
----------------------------------------

`yarn add postcss postcss-preset-env postcss-loader -D`

Docs: https://github.com/postcss/postcss

https://webpack.js.org/loaders/postcss-loader/#root

clean output folder
-------------------

`yarn add clean-webpack-plugin -D`

https://github.com/johnagan/clean-webpack-plugin


html template
--------------
`yarn add html-webpack-plugin -D`

Docs: https://webpack.js.org/plugins/html-webpack-plugin/#root

images /files..
----------------

Don't install anything extra to handle files;

(<strike>`yarn add file-loader image-loader -D`</strike>) for webpack 4 || loaders included in webpack 5

Docs: https://webpack.js.org/guides/asset-modules/

react and jsx...
---------------
`yarn add react react-dom`

`yarn add @babel/preset-react -D`

Docs: https://babel.dev/docs/en/babel-preset-react


Vue js..
-------

`yarn add vue vue-router`

`yarn add vue-loader vue-template-compiler @vue/compiler-sfc vue-style-loader -D`

Docs: https://vue-loader.vuejs.org/guide/

Extra: vue-style-loader and css-loader conflict

https://github.com/vuejs/vue-style-loader/issues/42

https://github.com/vuejs/vue-style-loader/issues/46#issuecomment-670624576

https://github.com/vuejs-templates/webpack/issues/215

Typescript
-----------

`yarn add @babel/preset-typescript  -D`

<strike>Docs: https://webpack.js.org/guides/typescript/#basic-setup </strike>

Docs: https://babeljs.io/docs/en/babel-preset-typescript




MORE@ https://webpack.js.org/guides/
-------------------------------------