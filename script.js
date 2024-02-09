const btns_action = document.querySelectorAll('.action-btn');
const score_element = document.getElementById('score');
const computer = document.getElementById('computer-selection');
const player = document.getElementById('player-selection');
const round_result = document.getElementById('round-result');
const round_result_text = document.querySelector('#round-result span');
const btn_replay = document.getElementById('replay');

var victories = 0;
var defeats = 0;
var draws = 0;
var match = 0;
var playerSelection;
var computerSelection;

round_result.style.display = 'none';

btn_replay.addEventListener('click', replay);

btns_action.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        var action_selected = e.target.id;
        playerSelection = action_selected;
        playRound();
    });
});

function playRound() {
    match++;
    if (match > 5) {
        replay();
        match++;
    }
    getComputerChoice();
    player.innerText = playerSelection;
    computer.innerText = computerSelection;
    round_result.style.display = 'block';
    // console.log("Your selection: " + playerSelection);
    // console.log("Computer selection: " + computerSelection);
    let result = matchResult();
    round_result_text.textContent = result;
    setScore();
}

function getComputerChoice() {
    var choice = [
        'paper',
        'scissors',
        'rock'
    ];
    var randomNumber = Math.floor(Math.random()*choice.length);
    computerSelection = choice[randomNumber];
}

function matchResult () {
    let result_text = "";
    switch (playerSelection) {
        case 'rock':
            if(computerSelection == "rock") {
                result_text = "Draw! both selected rock";
                draws++;
            }
            if(computerSelection == "paper") {
                result_text = "You Lose! Paper beats rock";
                defeats++;
            }
            if(computerSelection == "scissors") {
                result_text = "You Win! Rock beats scissors";
                victories++;
            }
            break;
        case 'paper':
            if(computerSelection == "rock") {
                result_text = "You Win! Paper beats rock";
                victories++;
            }
            if(computerSelection == "paper") {
                result_text = "Draw! both selected paper";
                draws++;
            }
            if(computerSelection == "scissors") {
                result_text = "You Lose! Scissors beats paper";
                defeats++;
            }
            break;

        case 'scissors':
            if(computerSelection == "rock") {
                result_text = "You Lose! Rock beats scissors";
                defeats++;
            }
            if(computerSelection == "paper") {
                result_text = "You Win! Scissors beats paper";
                victories++;
            }
            if(computerSelection == "scissors") {
                result_text = "Draw! both selected scissors";
                draws++;
            }
            break;
        default:
            break;
    }

    return result_text;
}

function setScore() {
    score_element.innerText = victories.toString();
    if (match == 5) {
        round_result_text.textContent = `Finish! victories: ${victories}; defeats: ${defeats}; draws: ${draws}`;
        round_result_text.setAttribute('style', 'color: red;');
        draws = 0;
        defeats = 0;
        victories = 0;
    }
}

function replay() {
    match = 0;
    draws = 0;
    defeats = 0;
    victories = 0;
    round_result_text.setAttribute('style', 'color: black;');
    round_result.style.display = 'none';
    score_element.innerText = victories.toString();
}
