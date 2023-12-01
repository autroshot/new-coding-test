const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n, m, k;
let nums;
let lineNumber = 0;
rl.on('line', (line) => {
    if (lineNumber === 0) {
        [n, m, k] = line.split(' ').map(Number);
        lineNumber = lineNumber + 1;
    } else {
        nums = line.split(' ').map(Number);
        rl.close();
    }
}).on('close', () => {
    let result = 0;

    nums.sort((a, b) => b - a);
    result = result + Math.floor(m / (k + 1)) * (nums[0] * k + nums[1]);
    result = result + (m % (k + 1)) * nums[0];

    console.log(result);

    process.exit();
});
/*
첫째 줄: n m k
n: 수의 개수
m: 더해지는 횟수
k: 한 수가 연속으로 더해질 수 있는 횟수

둘째 줄: n개의 자연수
--------------------------------
input
5 8 3
2 4 5 4 6
output
46

input
5 8 4
2 4 5 4 6
output
47

input
5 8 4
2 6 5 4 6
output
48
*/
