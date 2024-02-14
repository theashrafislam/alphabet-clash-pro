// function play(){
//     //step-1: hide the home screen. to hide the screen and the class hidden to the home section.
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
// }

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
    continueGame()
}