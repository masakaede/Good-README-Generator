const fs = require("fs");
const util = require("util");
// const userInput = require("./assets/js/user-input")
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

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




var answers = {}
var licence = ""
async function userData() {
    try {
        answers = await promptUser();

        console.log("51" + answers.name)

        //"1.	Download packages 2. Type in “node index.js” at terminal 3. Answer prompt questions"

        switch (answers.licence) {
            case "Apache":
                lience = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case "MIT":
                licence = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                break;
            case "BSD":
                licence = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
                break;
            case "GPL":
                licence = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                break;
            case "Mozilla":
                licence = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
                break;
            case "LGPL":
                licence = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
                break;
        }

        console.log("59 Successfully read answer");
    } catch (err) {
        console.log(err)
    }
}

// async function createFile() {
//     try {
//         await writeFileAsync("README2.md", answers, "utf8");

//         console.log("Successfully wrote to README.md");
//     } catch (err) {
//         console.log(err)
//     }
// }
userData().then(function () {
    console.log("76" + answers.description)
    console.log("77" + answers)

    var date = new Date();
    var year = date.getFullYear();

    const readme = `# ${answers.name}

## Description
${answers.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${answers.instruction}

## Usage
${answers.usage}

## License
${licence}
## Questions
* Follow me at: <a href="https://github.com/${answers.username}" target="_blank">https://github.com/${answers.username}</a>

* Please email to ${answers.email} if you have any question

© ${year} ${answers.username}
`

    fs.writeFile("README2.md", readme, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("87 Successfully wrote to README.md");
    }
    );
    console.log("90" + JSON.stringify(answers))

})
// createFile()

// console.log(name.instruction)
