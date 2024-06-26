import os from 'node:os' // We have the access of cpus information by importing OS in nodejs

console.log(os.cpus().length);  // It will log the length of the cpu

/*

1. In nodejs, we have an event queue, when user makes an request first the request goes to the event queue.
2. After this, the request will go in the event loop, event loop is a machine, which it is always watching the event queue that any request have came or not on FIFO(First In First Out) principle
3. There are two types of operations are performed, first is Blocking operation which is also known as Synchronous operation and Non-Blocking operation which is also known as Asynchronous operation.
4. So, when event loop take request from even queue that first it checks whether it is blocking or non-blocking operation.
5. If it's a non-blocking operation then it will process the request and send the response back to the user or client.
6. If it's a blocking operation and then it should go to the thread pool, thread have multiple threads and thread pool is responsible to process the non-blocking request and send the response to the user.
7. fs.writeFileSync('./test.txt','THis is a dummuy data') --> This is a Blocking operation
8. fs.writeFile('./test.txt','THis is a dummuy data') --> This is a Non-Blocking operation
9. By default thread pool have only 4 threads or worker
10. We can increase the thread size depend on the cpu
11. Default Thread Pool size = 4
    Max? --> 8core cpu = 8
12. Always try to write non blocking code.


*/