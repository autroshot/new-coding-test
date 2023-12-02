const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M;
let cards = [];
let lineNumber = 0;
rl.on('line', (line) => {
    if (lineNumber === 0) {
        [N, M] = line.split(' ').map(Number);
        lineNumber = lineNumber + 1;
        return;
    }
    if (lineNumber < N) {
        cards.push(line.split(' ').map(Number));
        lineNumber = lineNumber + 1;
        return;
    }
    cards.push(line.split(' ').map(Number));
    rl.close();
}).on('close', () => {
    const minCards = cards.map((row) => Math.min(...row));
    const result = Math.max(...minCards);
    console.log(result);

    process.exit();
});
/*
# 숫자 카드 게임
행에서 가장 작은 카드를 뽑아야 함
- 입력
첫째 줄: N M
N: 행의 개수
M: 열의 개수
둘째 줄 이후로 카드가 N X M의 형태로 있음
- 출력
룰을 따를 때 가장 큰 수

행마다 가장 작은 수를 찾고 그 중에서 가장 큰 수를 찾기
--------------------------------
input
3 3
3 1 2
4 1 4
2 2 2
output
2

input
2 4
7 3 1 8
3 3 3 4
output
3
*/
