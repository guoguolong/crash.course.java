// // readline风格：按行读取
// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function (cmd) {
//   console.log('You just typed: '+cmd);
// });


process.stdin.setEncoding('utf8');

console.log('请随便输入点什么：');
process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    chunk = chunk.trim();
    if (chunk == 'bye') {
        process.exit(0);
    }
    console.log(`您输入的是: ${chunk} ，输入 bye 退出程序.`);
  }
});