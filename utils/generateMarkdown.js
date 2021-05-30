function generateMarkdown(answers) {
const markdown = `
# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
 
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
## Installation
💾 ${answers.installation}
## Usage
💻 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
*This application is covered by the ${answers.license} license. 
## Contributing
👪 ${answers.contributing}
## Tests
✏️ ${answers.tests}
## Questions
✋ ${answers.questions}<br />
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
_This README was generated with ❤️ by [README-generator]() _
    `;
  
return markdown;

}


module.exports = generateMarkdown;
