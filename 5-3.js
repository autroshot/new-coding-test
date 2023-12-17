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
    const row = line.split('').map(Number);
    graph.push(row);
    lineNumber = lineNumber + 1;

    if (lineNumber === N + 2) {
        rl.close();
        return;
    }
}).on('close', () => {
    let count = 0;
    const MOVES = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            const result = dfs(x, y);
            if (result) {
                count = count + 1;
            }
        }
    }

    console.log(count);

    process.exit();

    function dfs(x, y) {
        if (x <= -1 || x >= N || y <= -1 || y >= M) return false;
        if (graph[x][y] === 1) return false;
        graph[x][y] = 1;

        MOVES.forEach(([dx, dy]) => dfs(x + dx, y + dy));
        return true;
    }
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

- 입력
3 3
001
010
101
- 출력
3
*/
