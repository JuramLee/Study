

console.log("start");                                   // 1
setTimeout(() => console.log("timer"));                 // 5
process.nextTick(() => console.log("tick"));            // 3
Promise.resolve().then(() => console.log("promise"));   // 4
console.log('end');                                     // 2

// 15342