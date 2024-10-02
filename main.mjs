'use strict';

export const readFileWithoutComments = filePath => fs.readFileSync(filePath,'utf8').replace(/^\s*#.*$/gm,'\n');

export default readFileWithoutComments;
