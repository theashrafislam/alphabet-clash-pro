function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    //get a random index between 0 -25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}

// function rNum (){
//     let i = Math.random()*100;
//     while(i < 50){
//         i = Math.random()*100;
//     }
//     return i;
// }
// console.log(rNum);