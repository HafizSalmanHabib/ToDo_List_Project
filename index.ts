const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos:string[] = [];
let count = true;

function getUserInput() {
  rl.question("What do you want to add? ", (ToDo: string) => {
    if (ToDo) {
      todos.push(ToDo);
    } else {
      console.log("Kindly add valid input");
    }

    rl.question("Do you want to add more TODO? (yes/no): ", (answer: string) => {
      if (answer.toLowerCase() === "yes") {
        getUserInput();
      } else {
        rl.close();
        console.log("Your TODO list:");
        console.log(todos);
      }
    });
  });
}

getUserInput();
