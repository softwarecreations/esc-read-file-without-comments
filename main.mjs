'use strict';

import fs from 'fs';

export const readFileWithoutComments = filePath => fs.readFileSync(filePath,'utf8').replace(/^\s*#.*$/gm,'\n');

export default readFileWithoutComments;
