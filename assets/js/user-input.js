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
            name: "instruction",
            message: "Please enter installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter usage information?"
        },
        {
            type: "input",
            name: "username",
            message: "please enter your github username"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address"
        }

    ])
}

module.exports = {
    promptUser: promptUser
}