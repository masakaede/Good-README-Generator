const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's the project name?"
        },
        {
            type: "input",
            name: "description",
            message: "What's the description of the project?"
        },
        {
            type: "input",
            message: "Please enter installation instructions?",
            name: "installation-instruction"
        },
        {
            type: "input",
            message: "Please enter usage information?",
            name: "usage information"
        },
        {
            type: "input",
            message: "please enter your github username",
            name: "username"
        },
        {
            type: "input",
            message: "Please enter your email address",
            name: "email"
        }

    ])
}

module.exports = {
    promptUser: promptUser
}