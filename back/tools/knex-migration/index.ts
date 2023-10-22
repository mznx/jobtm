import { exec } from 'node:child_process';
import process from 'node:process';

if (process.argv.length < 3) {
    throw new Error('Необходимо передать команду');
}

if (process.argv.length < 4) {
    throw new Error('Необходимо передать имя БД');
}

const cmd = {
    _node: 'npx ts-node',
    _cli: './node_modules/knex/bin/cli.js',
    list: 'migrate:list',
    create: 'migrate:make',
    up: 'migrate:latest',
    down: 'migrate:down',
};

const knexCmd = process.argv[2];
const dbName = process.argv[3];
const arg = process.argv[4] || '';
const knexFilePath = `./src/db/${dbName}/knexfile.ts`;

const command = `${cmd._node} ${cmd._cli} --knexfile ${knexFilePath} ${cmd[knexCmd]} ${arg}`;
console.log('Command:', command);

exec(command, (err, stdout, stderr) => {
    if (err) throw err;
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
});
