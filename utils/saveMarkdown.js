const fs = require('fs/promises')

const saveMarkdown = (string) => {
    fs.saveFile('markdown.md' , str)
    .then(function () {
        console.log('file saved')
}) 
    .catch(console.log)

};

module.exports = saveMarkdown