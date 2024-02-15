// function play(){
//     //step-1: hide the home screen. to hide the screen and the class hidden to the home section.
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        //update score:
        //1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);
        //2. increase the score by 1
        const newScore = currentScore + 1;
        //3. show the updated score
        currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        //step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        //step-2: reduce the life count
        const newLife = currentLife - 1;
        //step-3: display the updated life count
        currentLifeElement.innerText = newLife;
    }
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    //set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackGroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}