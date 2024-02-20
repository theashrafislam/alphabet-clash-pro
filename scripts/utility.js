function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0 -25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    return alphabet;
}
function setBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueById = element.innerText;
    const value = parseInt(elementValueById);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}