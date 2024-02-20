// function play(){
//     // console.log('start the match');
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function handleKeyboardButtonPressed(event){
    const playerPressed = event.key;
    console.log(event.key)
    if(playerPressed === 'Escape'){
        gameOver();
    }
    const currentAlphabetWord = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetWord.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);


    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        removeBackgroundColor(expectedAlphabet);

         const currentScore = getElementValueById('current-score');
         console.log(currentScore);
         const updatedScore = currentScore + 1;
         setElementValueById('current-score', updatedScore);



        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreValue = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreValue);
        const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        continueGame();
    }
    else{
        console.log('you missed a life');

        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
           gameOver();
        }


    //    1. get the current life in a number
        //   const currentLifeElement = document.getElementById('current-life');
        //   const currentLifeValue = currentLifeElement.innerText;
        //   const currentLife = parseInt(currentLifeValue);
         

        //   2. Update the life
        // const newLife = currentLife - 1;

        //    3. Show updated life
        // currentLifeElement.innerText = newLife;
    }
}





document.addEventListener('keyup', handleKeyboardButtonPressed)

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetWord = document.getElementById('current-alphabet');
    currentAlphabetWord.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    

    continueGame()
}


function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
  
  const lastScore = getElementValueById('current-score');
  setElementValueById('last-score', lastScore);

  const currentAlphabet = getTextById('current-alphabet')
  removeBackgroundColor(currentAlphabet);

  
}
