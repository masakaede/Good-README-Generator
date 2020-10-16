const fs = require("fs");
const userInput = require("./assets/js/user-input")

var answers = {}
var licence = ""
async function userData() {
    try {
        answers = await userInput.promptUser();

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
    } catch (err) {
        console.log(err)
    }
}

userData().then(function () {

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

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
* Follow me at: <a href="https://github.com/${answers.username}" target="_blank">https://github.com/${answers.username}</a>

* Please email to ${answers.email} if you have any question

© ${year} ${answers.username}
`
    fs.writeFile("README.md", readme, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("Successfully wrote to README.md");
    });
})