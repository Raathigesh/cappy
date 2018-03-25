import { read } from '../file/read';

export function getContentOfFiles(filePaths: string[]) {
  const promises = [];

  for (const file of filePaths) {
    promises.push(read(file));
  }

  return Promise.all(promises).then((contents: any[]) => {
    return contents.map((content, i) => ({
      path: filePaths[i],
      content
    }));
  });
}
