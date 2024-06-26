// import fs from 'node:fs'
import {unlink} from 'node:fs/promises'
import fs from 'node:fs'

// fs.writeFileSync('./test.txt', "This is a dummy data")

// const results = fs.readFileSync('./test.txt', 'utf-8')
// console.log(results);


// fs.readFile('./test.txt', 'utf-8', (err, results)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(results);
//     }
// })


// fs.appendFileSync('./test.txt', 'Hello\n')


// fs.cpSync('./test.txt', './copy.txt')

// fs.unlinkSync('./copy.txt')


// fs.mkdirSync('mydoc/a/b', {recursive:true})


// try {
//     await unlink('./copy.txt')
//     console.log("Successfully removed the file");
// } catch (error) {
//     console.log("Got error:", error);
// }


// this is blocking operation
// console.log('1');
// const results = fs.readFileSync('./test.txt', 'utf-8')
// console.log(results);
// console.log('2');


// this is non blocking operation
console.log("1")
fs.readFile('./test.txt','utf-8',(err, results)=>{
    if(err){
        console.log(err);
    }else{
        console.log(results);
    }
})
console.log("2")
