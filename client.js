const WebSocket = require('ws');
const Express = require('express');
const url = require('url');
const app = Express();
const readline = require('readline');
var name = '';
var error = false;
var ws;
const inquirer = require('inquirer')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

var questions = [{
        type: 'input',
        name: 'From',
        message: 'Please enter valid User Name',
        validate: function (name) {
            //Validates the username to make sure it meets the req
            var pass = name.match(/^[0-9a-zA-Z]{3,10}$/);
            if (pass) {
                serverURL = `ws://localhost:4093?username=${encodeURIComponent(name)}`;
                ws = new WebSocket(serverURL);
                ws.onopen = () => {
                    //ws.send()
                };
                return true
            }
            return 'pleaser enter valid Username'
        }

    },
    {
        type: 'input',
        name: 'to',
        message: "Enter Recipeint name or keep blank (To:) ?",
        choices: ['', 'all'],

    },
    {
        type: 'list',
        name: 'kind',
        message: 'Select the Kind of Message you want to send (Kind: ) ',
        choices: ['direct', 'chat', 'userlist', 'whoami'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'data',
        message: 'Please type a message that you want to send (Data:)',

    }

];
inquirer.prompt(questions).then(answers => {
    //console.log('\nOrder receipt:');
    //sends the JSON object as a string to the server 
    ws.send(JSON.stringify(answers, ''));
    //waits for server responses and displayes tha data
    ws.onmessage = (e) => {
        var myObj = JSON.parse(e.data);
        console.log(e.data);
    };
});