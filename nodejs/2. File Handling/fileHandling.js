import fs from 'node:fs'


// Synchronouse
// fs.writeFileSync('./test.txt', 'This is a dummy data')
// const results =  fs.writeFileSync('./test.txt', 'This is a dummy data')

//async
// fs.writeFile('./text.txt', "This is a dummy data async",(err)=> console.log(err))

// const results = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(results);
fs.readFile('./contact.txt', 'utf-8',(err,result) =>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
} )

fs.appendFileSync('./test.txt',new Date().getFullYear().toLocaleString()+'\n')  //This function is used to append the text in the same file without overriding it.

fs.appendFileSync('./contact.txt', "Hello\n")

// fs.cpSync('./contact.txt', './copy.txt')  // this function is used to copy the data of file
// fs.unlinkSync('./copy.txt')    // This function is used to delete the file
console.log(fs.statSync('./contact.txt'))   //This function is used to check the stats of a file like when it was created, modified and etc.


fs.mkdirSync('my-docs/a/b',{recursive:true})   //By giving true to recursive porpertly we are able to create mutilple sub directories.
fs.mkdirSync('my-docs')   //If we don't put recursive to true then we are not able to create multiple sub directories