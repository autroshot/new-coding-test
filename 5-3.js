const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M;
const graph = [];
let lineNumber = 1;
rl.on('line', (line) => {
    if (lineNumber === 1) {
        [N, M] = line.split(' ').map(Number);
        lineNumber = lineNumber + 1;
        return;
    }
    if (lineNumber <= N) {
        const row = line.split('').map(Number);
        graph.push(row);
        lineNumber = lineNumber + 1;
        return;
    }

    rl.close();
}).on('close', () => {
    console.log(graph);

    process.exit();
});
/*
# 음료수 얼려 먹기
- 입력
N M
두 번째 줄부터는 얼음 틀의 형태(뚫린 부분이 0, 막힌 부분이 1)

N: 세로 길이
M: 가로 길이

- 출력
생성되는 총 아이스크림의 개수

- 논리
0을 확인하면 된다.

- 구현
1. 얼음 틀을 연결 리스트로 변환한다.
2. BFS를 사용하여 아이스크림을 만들고, 그 결과를 셋으로 변환한다.
3. 모든 노드를 순회하며 연결 리스트로
--------------------------------
- 입력
4 5
00110
00011
11111
00000
- 출력
3
*/
