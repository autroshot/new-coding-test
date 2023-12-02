const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, K;
rl.on('line', (line) => {
    [N, K] = line.split(' ').map(Number);

    rl.close();
}).on('close', () => {
    const result = solution(N, K, 0);
    console.log(result);

    process.exit();
});

function solution(N, K, count) {
    if (N === 1) return count;
    if (N % K === 0) return solution(N / K, K, ++count);
    return solution(N - 1, K, ++count);
}
/*
# 1이 될 때까지
- 입력
첫째 줄: N K
- 출력
계산 횟수

가능하면 2번 계산을 수행한다. 안 되면 1번 계산을 수행한다.
재귀 함수로 풀어보자
--------------------------------
input
17 4
output
3

input
25 5
output
2
*/
