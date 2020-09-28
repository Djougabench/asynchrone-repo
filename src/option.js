import fs from 'fs/promises'

console.log('START OF PROGRAM')

const copyFileP = async () => {
    let content = await fs.copyFile('./file1.txt', './file4.txt')

    return content
}

await copyFileP()

const limiterco = () => {
    if (process.argv.length > 3) {
        console.log(`ERROR :please two words maximum!`)
    }
}

limiterco()

console.log('END OF PROGRAM')
