// Project 3: Personal Wikipedia Library (Fetch project)
// -Build a console app that allows you to fetch data from the wikipedia api: https://en.wikipedia.org/w/api.php (use documentation to understand how to make the queries you want)
// -needs to have a main menu that allows you to choose between:
// Making a new fetch request
// save data from a fetch request
// viewing all past queries
// view saved query data
// delete saved query data
// -needs to redirect to main menu
// -async functions with proper use of try/ catch or .then()/.catch()
// BONUS refactor this project to work like a library, where there is an amount of time you’re able to “checkout” the information for and having a maximum amount that can be “checked out” at once, then after  amount of time that something can be checked out for, the info leaves and you’re able to checkout more books or info. Make it fun and be creative by exploring more ideas of a library as well like putting things on hold etc.
startProgram.addEventListener("click", executeAsyncTask);

let currentFetch = [];
let savedFetch = [];
let allFetch = [];

function theProgram() {
  console.log(
    "Welcome to the bank of Devpipeline!\n------------------------------------\nPlease select from the options below:"
  );

  let options = [
    "Search for something",
    "Save your current search",
    "View saved search history",
    "View all search history",
    "Quit",
  ];

  for (let i = 0; i < options.length; i++) {
    console.log(i + 1, options[i]);
  }

  let userChoice;
  let quitOption = false;

  // Depending on the user input will determine what option they can use and this executes is
  while (quitOption === false) {
    switch (
      (userChoice = Number(
        prompt("Please choose a NUMBER from the list of options")
      ))
    ) {
      case 1:
        let userInput = prompt("What would you like to search wikipedia for?");

        currentUser.deposit(depositAmount);
        console.log("$" + currentUser.balance + " is your current balance");

        break;
      case 2:
        console.log("$" + currentUser.balance + " is your current balance");
        let withdrawAmount = Number(
          prompt("Please input your withdraw amount")
        );
        if (withdrawAmount > currentUser.balance) {
          console.log("Insufficient balance");
        } else {
          currentUser.withdraw(withdrawAmount);
          console.log(currentUser.balance);
        }
        break;
      case 3:
        console.log("Your current balance is " + currentUser.balance);
        break;
      case 4:

      case 5:
        console.log("Thanks for using our wikipedia....thing!");
        quitOption = true;
        break;
    }
  }
}

// ---------------------------------------------------------------

async function executeAsyncTask() {
  console.log("starting async task...");

  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=birds`
    );
    const result = await response.json();

    console.log(result);

    currentFetch.push(result);
    allFetch.push(result);
    savedFetch.push(result);

    console.log(currentFetch[0].query.search[0].title);
    //console.log(currentFetch);
    //console.log(allFetch);
  } catch (error) {
    console.error("Error:", error);
  }
}

// executeAsyncTask();
