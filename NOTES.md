# Nodejs

V8 Javascript Engine -> Nodejs APIs -> Nodejs bindings -> Libuv

Javascript is actually a synchronous language but we are able to code asynchronously due to functions given in the web browser and in node like `setTimeout`. We are able to run code asynchronously in nodejs due to the use of Libuv which is built in C and C is able to use a thread. When running a node program the libuv setup a thread pool 4 by default and 1 main thread to run our program and run code asynchronously. Even though there is a thread pool in nodejs due to libuv it's not prefered to use it. Because threads actually makes things more complex. Node will use the operating system kernel instead when possible to run code asynchronously. After passing it to the kernel it will be passed to the event loop.

Event loop have a callback queue which exists function/callbacks to run sequentially. At each iteration it will check each queue whether there is a callback to finish or not. The order the queue will be checked is:

1. Timers
2. I/O Callbacks
3. setImmediate
4. Close Callback
   Close Callback is a callback that is set when we are closing connections or any asynchronous functions.

After ES6 Promises/Async Functions are now native to javascript which changes the event loop. It now has Job Queue / Microtask Queue which is different from Callback Queue and it is prioritized more then the callback queue. The Job Queue consist of async codes that uses the `Promise` or the `async ... await`

We can run asynchronous code in different ways:

1. Sequential
   by using Await 1 by 1
   ```
   await ...;
   await ...;
   await ...;
   ```
2. Parallel
   It will run the asynchronous function to run in parallel
   `Promise.all()`
   but `Promise.all()` will fail and throw an error if there is any returns an error/reject and will cancel/ignore the rest of the function that is passed. If we don't care whether it is resolved or rejected then we can use `Promise.allSettled()` this will keep running and returns the results.
3. Race
   It will run the asynchronous function in parallel but if there is any that is resolved first than it will return that resolved value and cancel the rest.
   `Promise.race()`

Besides the main thread there exists worker thread which runs alongside the main thread. They communicate through messages.
