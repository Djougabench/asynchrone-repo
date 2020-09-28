import fs from 'fs'

fs.copyFileSync('./file1.txt', './file2.txt')
console.log('copied')
