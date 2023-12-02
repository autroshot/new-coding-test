const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let startX, startY;
rl.on('line', (line) => {
    [startX, startY] = line.split('');
    startX = startX.codePointAt() - 'a'.codePointAt() + 1;
    startY = Number(startY);

    rl.close();
}).on('close', () => {
    let count = 0;
    console.log(startX);
    console.log(startY);

    const moves = [
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
    ];
    moves.forEach((move) => {
        const movedX = startX + move[0];
        const movedY = startY + move[1];
        if (movedX >= 1 && movedX <= 8 && movedY >= 1 && movedY <= 8) {
            count = count + 1;
        }
    });

    console.log(count);

    process.exit();
});
/*
# 왕실의 나이트
- 입력
열(알파벳)행(숫자)
- 출력
이동 가능한 경우의 수


--------------------------------
input
c2
output
6

input
a1
output
2
*/
