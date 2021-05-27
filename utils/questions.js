const questions = [
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
         name:"useage",
         message:"Briefly describe the useage of this project."
    },

    {
        name:"contributing",
        message:"Please include contributing guidelines for this project."
    },
    
    {       
        name:"test",
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
            ]
    }
        

        



    
];

module.exports = questions;