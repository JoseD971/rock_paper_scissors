var playerSelection;
var victories = 0;
var defeats = 0;
var draws = 0;
var match = 0;
var computerSelection;
// const btn_round = document.getElementById("play-round");
// const btn_game = document.getElementById("play-game");

const btns_action = document.querySelectorAll('.action-btn');
const score_element = document.getElementById('score');

btns_action.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        var action_selected = e.target.id;
        playerSelection = action_selected;
        playRound();
    });
});

// btn_round.addEventListener('click', () => {
//     playRound();
// });

// btn_game.addEventListener('click', () => {
//     victories = 0;
//     defeats = 0;
//     draws = 0;
//     playGame();
// });

function getComputerChoice() {
    var choice = [
        'paper',
        'scissors',
        'rock'
    ];
    var randomNumber = Math.floor(Math.random()*choice.length);
    computerSelection = choice[randomNumber];
    // return choice[randomNumber];
}

function getPlayerChoice() {
    playerSelection = prompt("Enter your selection");
}

function playRound() {
    // getPlayerChoice();
    // var playerChoice = (String(playerSelection).toLowerCase()).replace(/\s/g, "");
    // checkPlayerChoice(playerChoice);
    // var [playerNumericValue, computerNumericValue] = setNumericValues(playerSelection, computerSelection);
    match++;
    getComputerChoice();
    console.log("Your selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);
    matchResult();
    setScore();
}

// function setNumericValues(playerChoice, computerChoice) {
//     switch (playerChoice) {
//         case 'rock':
//             playerChoice = 1;
//             break;

//         case 'paper':
//             playerChoice = 2;
//             break;

//         case 'scissors':
//             playerChoice = 3;
//             break;
    
//         default:
//             break;
//     }

//     switch (computerChoice) {
//         case 'rock':
//             computerChoice = 1;
//             break;

//         case 'paper':
//             computerChoice = 2;
//             break;

//         case 'scissors':
//             computerChoice = 3;
//             break;
    
//         default:
//             break;
//     }

//     return [playerChoice, computerChoice];
// }

function checkPlayerChoice(playerChoice) {
    let condition = false;
    while (condition == false) {
        playerChoice = (String(playerChoice).toLowerCase()).replace(/\s/g, "");
        if(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
            condition = true;
            playerSelection = playerChoice;
        } else {
            alert("Please, enter a correct value (Rock, Paper, Scissors)");
            playerChoice = prompt("Enter your selection");
        }
    }
}

function matchResult () {
    switch (playerSelection) {
        case 'rock':
            if(computerSelection == "rock") {
                alert("Draw! both selected rock");
                draws++;
            }
            if(computerSelection == "paper") {
                alert("You Lose! Paper beats rock");
                defeats++;
            }
            if(computerSelection == "scissors") {
                alert("You Win! Rock beats scissors");
                victories++;
            }
            break;
        case 'paper':
            if(computerSelection == "rock") {
                alert("You Win! Paper beats rock");
                victories++;
            }
            if(computerSelection == "paper") {
                alert("Draw! both selected paper");
                draws++;
            }
            if(computerSelection == "scissors") {
                alert("You Lose! Scissors beats paper");
                defeats++;
            }
            break;

        case 'scissors':
            if(computerSelection == "rock") {
                alert("You Lose! Rock beats scissors");
                defeats++;
            }
            if(computerSelection == "paper") {
                alert("You Win! Scissors beats paper");
                victories++;
            }
            if(computerSelection == "scissors") {
                alert("Draw! both selected scissors");
                draws++;
            }
            break;
        default:
            break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    alert(`Finish! victories: ${victories}; defeats: ${defeats}; draws: ${draws}`);
}

function setScore() {
    score_element.innerText = victories.toString();
    if (match == 5) {
        console.log(defeats);
        alert(`Finish! victories: ${victories}; defeats: ${defeats}; draws: ${draws}`);
        draws = 0;
        defeats = 0;
        victories = 0;
    }
}