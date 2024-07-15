import inquirer from 'inquirer';
const currency = {
    usd: 1,
    eur: 0.91,
    aed: 23.9,
    inr: 74.78,
    pkr: 280
};
let user_answer = await inquirer.prompt([{
        name: 'from',
        message: " Enter your currency",
        type: 'list',
        choices: ['usd', 'eur', 'aed', 'inr', 'pkr']
    },
    {
        name: 'to',
        message: "Enter the required currency",
        type: 'list',
        choices: ['usd', 'eur', 'aed', 'inr', 'pkr']
    },
    {
        name: 'amount',
        message: "enter the amount",
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
