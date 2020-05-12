const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
let username = await askQuestion ("please enter username")
console.log(`hello ${username} how are you today?`)    // Your Code Goes Here...
}


Program().then(() => {
    process.exit(0);
});
