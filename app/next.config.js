const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
module.exports = withTypescript(withCSS(withFonts()));
