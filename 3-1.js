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
    const moneyToPay = inputs[0];
    let change = 1000 - moneyToPay;

    const count500 = Math.floor(change / 500);
    change = change - count500 * 500;
    const count100 = Math.floor(change / 100);
    change = change - count100 * 100;
    const count50 = Math.floor(change / 50);
    change = change - count50 * 50;
    const count10 = Math.floor(change / 10);
    change = change - count10 * 10;
    const count5 = Math.floor(change / 5);
    change = change - count5 * 5;
    const count1 = change;

    console.log(count500 + count100 + count50 + count10 + count5 + count1);

    process.exit();
});
