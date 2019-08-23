const argv = require("yargs-parser")(process.argv.slice(2))
const _mode = argv.mode || "development";//拿到当前的开发模式
const _mergeConifg = require(`./config/webpack.${_mode}.js`)
console.log(argv.mode)