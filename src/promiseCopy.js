import fs from 'fs/promises'

let copyFileP = async () => {
    let content = await fs.copyFile('./file1.txt', './file3.txt')

    return content
}

console.log('START OF PROGRAM')

let content = await copyFileP()

console.log('END OF PROGRAM')
