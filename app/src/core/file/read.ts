import * as fs from 'fs';
export function read(path: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
