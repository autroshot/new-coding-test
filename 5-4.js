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
    const MOVES = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    const queue = [[0, 0]];
    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < MOVES.length; i++) {
            const [dx, dy] = MOVES[i];
            const [newX, newY] = [x + dx, y + dy];

            if (newX < 0 || newX >= N || newY < 0 || newY >= M) continue;
            if (graph[newX][newY] === 0) continue;
            if (graph[newX][newY] === 1) {
                graph[newX][newY] = graph[x][y] + 1;
                queue.push([newX, newY]);
            }
        }
    }

    console.log(graph[N - 1][M - 1]);

    process.exit();
});

/*
# 미로 탈출
- 입력
N M
두 번째 줄부터는 미로의 정보(못 가는 곳이 0, 갈 수 있는 곳이 1)

N: 세로 길이
M: 가로 길이

- 출력
최소 이동 칸
--------------------------------
- 입력
5 6
101010
111111
000001
111111
111111
- 출력
10

- 입력
3 3
110
010
011
- 출력
5
*/
