# Nodejs

V8 Javascript Engine -> Nodejs APIs -> Nodejs bindings -> Libuv

Javascript is actually a synchronous language but we are able to code asynchronously due to functions given in the web browser and in node like `setTimeout`. We are able to run code asynchronously in nodejs due to the use of Libuv which is built in C and C is able to use a thread. When running a node program the libuv setup a thread pool 4 by default and 1 main thread to run our program and run code asynchronously. Even though there is a thread pool in nodejs due to libuv it's not prefered to use it. Because threads actually makes things more complex. Node will use the operating system kernel instead when possible to run code asynchronously. After passing it to the kernel it will be passed to the event loop.

Event loop have a callback queue which exists function/callbacks to run sequentially. At each iteration it will check each queue whether there is a callback to finish or not. The order the queue will be checked is:

1. Timers
2. I/O Callbacks
3. setImmediate
4. Close Callback
   Close Callback is a callback that is set when we are closing connections or any asynchronous functions.
