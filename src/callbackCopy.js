import fs from 'fs'

const copycb = (err) => {
    if (e) throw e
    console.log(`text copied to destination,don't worry`)
}
fs.copyFile('./file1.txt', './file3.txt', copycb)
