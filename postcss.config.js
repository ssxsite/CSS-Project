// const atImport = require("postcss-import")
 const cssnano = require("cssnano")
const cssnext = require("postcss-cssnext")
module.exports = {
    plugins: [
        cssnext,
        cssnano
    ]
}