실행 명령어는 다음과 같다.

```bash
node 3-1.js
```

다음은 입력을 받는 예시이다.

```js
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputs = [];
rl.on('line', (line) => {
    inputs = line.split(' ');

    rl.close();
}).on('close', () => {
    console.log(inputs.join(' '));

    process.exit();
});
```
