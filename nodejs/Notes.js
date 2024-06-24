/*

1. What is NodeJs?
--> a. Ryan Dahl developed NodeJs. He had taken V8 engine from chrome which is open source and used some c++ code and 
       build the a project which is known as NodeJs.
    b. Important Points:
        1. You can run JavaScript outside of the browser.
        2. JavaScript can talk to native machine because of C++.
        3. You can create web servers in JavaScript Language.
    c. NodeJs is not an framework nor an library. It is just a runtime environment for JavaScript
    d. We can run any js file using cmd "node filename" or "node filename.js"
    e. If you try to run the window related thing in local environment then it won't work because at the of embedding V8 and c++ founder removed the DOM things like alert function and window object. He removed the UI related work.

2. How to setup nodejs?
--> a. execute a cmd "npm init". This command is initialize or setup a file which is package.json which is used to run our project.


3. Modules?
--> a. We can create small modules for separate logics and do export/import to get the data.
    b. There are two ways to work with modules:
        1. CommonJS
        2. ES6
    c. CommonJS is a old way to import or export the modules whereas ES6 syntax that is "import and export" is the new way.
    d. const math = require('math') // here node will check in its preinstalled modules
    e. const math = require('./math') // here node will check in its current directory
    f. import math from './math' // This is the new way to import the modules, to use this type we have to add one property to package.json() file which is "type":"module"
    g. Similarly, we can export also, export default math; or  export const math = () =>{console.log("Hello")}

*/