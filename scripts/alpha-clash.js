function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    isGamePlayOn = true;

    continueGame();
}

function continueGame(){
    // Step 1. Generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackGroundColorById(alphabet);
}

document.addEventListener('keyup', handleKeyboardButtonPress)
// capture keyboard key press
let isGamePlayOn = false;
const artBoard = document.getElementById('art-board');
function handleKeyboardButtonPress(event){
    if(isGamePlayOn == false){
        return;
    }
    const playerPressed = event.key;
    // console.log('player pressed',playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not
    const audio = new Audio();
    if(playerPressed === expectedAlphabet){
        
        audio.src = "../audio/win.mp3";
        audio.play();

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        //---------------------------------------------------------
        //update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        audio.src = "../audio/lost.mp3";
        audio.play();


        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        const updatedLifePercentage = (updatedLife / 5) * 100;
        artBoard.style.background = `Linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%, red)`;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
        //------------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    const currentAlphabet = getTextElementById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

    isGamePlayOn = false;
    artBoard.style.background = 'Linear-gradient(#FFFFFFB3 100%, red)'
}