const reactDocs = require('react-docgen');
const findAllExportedComponentDefinitions = require('react-docgen/dist/resolver/findAllExportedComponentDefinitions');

export default function getReactComponents(source: string) {
  return reactDocs.parse(source, findAllExportedComponentDefinitions.default);
}
