const inquirer = require("inquirer");


function projectName(name) {
    return inquirer.prompt([
        {
            type: "input",
            message: "What's the project name?",
            name: "name"
        }
    ])
}

function description(description) {
    return inquirer.prompt([
        {
            type: "input",
            message: "What's the description of the project",
            name: "description"
        }
    ])
}

function installation(installation) {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter installation instructions?",
            name: "installation"
        }
    ])
}



inquirer.prompt([

    {
        type: "input",
        message: "Please enter installation instructions?",
        name: "installation"
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

module.exports = {
    unserInput: userInput
}
