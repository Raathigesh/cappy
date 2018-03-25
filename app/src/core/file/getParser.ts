import { extname } from 'path';
const tsParser = require('recast/parsers/typescript');
const jsParser = require('recast/babylon');

export default function getParser(filePath: string) {
  const extension = extname(filePath);

  switch (extension) {
    case '.js':
    case '.jsx':
      return jsParser;

    case '.ts':
    case '.tsx':
      return tsParser;

    default:
      throw new Error('File is not supported');
  }
}
