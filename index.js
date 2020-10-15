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



var answers = {}
async function userData() {
    try {
        answers = await promptUser();

        console.log("51" + answers.name)
        // console.log(answers.description)
        // console.log(answers.instruction)
        // console.log(answers.usage)
        // console.log(answers.username)
        // console.log(answers.email)
        //"1.	Download packages 2. Type in “node index.js” at terminal 3. Answer prompt questions"

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

## Questions
* Follow me at: <a href="https://github.com/${answers.username}" target="_blank">https://github.com/${answers.username}</a>

* Please email to ${answers.email} if you have any question

© 2020 ${answers.username}
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
