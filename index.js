var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var todos = [];
var count = true;
function getUserInput() {
    rl.question("What do you want to add? ", function (ToDo) {
        if (ToDo) {
            todos.push(ToDo);
        }
        else {
            console.log("Kindly add valid input");
        }
        rl.question("Do you want to add more TODO? (yes/no): ", function (answer) {
            if (answer.toLowerCase() === "yes") {
                getUserInput();
            }
            else {
                rl.close();
                console.log("Your TODO list:");
                console.log(todos);
            }
        });
    });
}
getUserInput();
