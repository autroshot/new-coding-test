const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M, A, B, d;
const map = [];
let lineNumber = 1;
rl.on('line', (line) => {
    if (lineNumber === 1) {
        [N, M] = line.split(' ').map(Number);
        lineNumber = lineNumber + 1;
        return;
    }
    if (lineNumber === 2) {
        [A, B, d] = line.split(' ').map(Number);
        lineNumber = lineNumber + 1;
        return;
    }
    if (lineNumber < N + 2) {
        map.push(line.split(' ').map(Number));
        lineNumber = lineNumber + 1;
        return;
    }
    map.push(line.split(' ').map(Number));

    rl.close();
}).on('close', () => {
    const visited = new Set();
    visited.add(JSON.stringify([A, B]));

    const move = { 0: [-1, 0], 1: [0, 1], 2: [1, 0], 3: [0, -1] };

    outer: while (true) {
        for (let turnCount = 0; turnCount <= 3; turnCount++) {
            d = turnLeft(d);

            let newA = A + move[d][0];
            let newB = B + move[d][1];

            if (
                map[newA]?.[newB] === 0 &&
                !visited.has(JSON.stringify([newA, newB]))
            ) {
                A = newA;
                B = newB;
                visited.add(JSON.stringify([A, B]));

                continue outer;
            }
        }

        let newA = A - move[d][0];
        let newB = B - move[d][1];

        if (map[newA]?.[newB] === 0) {
            A = newA;
            B = newB;

            continue;
        }
        break;
    }

    console.log(visited.size);

    process.exit();
});

function turnLeft(d) {
    if (d === 0) return 3;
    return d - 1;
}
/*
# 게임 개발
- 입력
N M
A B d
셋째 줄부터는 맵

N: 맵의 세로 크기
M: 맵의 가로 크기
시작 위치: (A, B)
d: 바라보는 방향
맵에서 0은 육지, 1은 바다

- 출력
이동을 마친 캐릭터가 방문한 칸의 수

- 논리
반복문에서 방향을 최대 4번 변경하며 가지 않았고 바다가 아닌 곳을 찾기
가지 않았던 곳을 찾으면 반복문으로 종료하고 현재 위치 갱신하기
가지 않았던 곳을 못 찾으면 뒤로 한 칸 가기
뒤가 바다여서 갈 수 없다면 종료
--------------------------------
- 입력
4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 1
1 1 1 1
- 출력
3

- 입력
2 2
0 0 0
0 0
1 0
- 출력
3

- 입력
2 2
1 1 0
0 0
1 0
- 출력
3

- 입력
2 3
0 0 0
0 0 0
1 0 1
- 출력
4

- 입력
2 3
1 1 0
0 0 0
1 0 1
- 출력
4
*/
