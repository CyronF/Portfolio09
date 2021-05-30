const questions = [
    {
        name: "username",
        message: "What is your GitHub username?"
    },

    {
        name: "title",
        message: "What is the title of your project?"
    },

    {
        name: "description",
        message: "Write a brief description of your project."
    },

    {
        name:"installation",
        message:"Please describe the installation process."
    },

    {
         name:"usage",
         message:"Briefly describe the usage of this project."
    },

    {
        name:"contributing",
        message:"Please include contributors for this project."
    },
    
    {       
        name:"tests",
        message:"Write your test instructions."
    },
    
    {
        type: "checkbox",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ],
    },

    {
        name: "questions",
        message: "Please let me if you have any questions."

    },

    {
        type:"input",
        name:"email",
        message: "Please enter your email address."

    }
    
]

module.exports = questions;