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
            type: "editor",
            name: "instruction",
            message: "Please enter installation instructions?"
        },
        {
            type: "editor",
            name: "usage",
            message: "Please enter usage information?"
        },
        {
            type: "list",
            name: "licence",
            message: "Please choose your licence (use arrow key to select)",
            choices: [
                "Apache",
                "MIT",
                "BSD",
                "GPL",
                "Mozilla",
                "LGPL"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Please enter contributing"
        },
        {
            type: "input",
            name: "tests",
            message: "Please enter tests"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your github username"
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