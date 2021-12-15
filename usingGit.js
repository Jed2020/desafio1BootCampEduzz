const inquirer = require("inquirer");


inquirer
  .prompt([
    {
        type: "list",
        name: "options",
        message: "What you will do with Git?!",
        choices: [{ name: "Start my Git.", value: 0 }, { name: "Status of the my Git.", value: 1 }, { name: "A commit.", value: 2}, { name: "Add a file", value: 3}]
    }
  ])
  .then((responses) => {
        if (responses.options === 0) {
            console.log("You need use the command: git init");
        }
        else if (responses.channels === 1) {
            console.log("You need use the command: git status");
        }
        else if (responses.channels === 2) {
            console.log("You need use the command: git commit -m");
        }
        else {
            console.log("You need use the command: git add <file>");
        }
});