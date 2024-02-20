function hideElementById (elementId){
  const element = document.getElementById(elementId);
   element.classList.add('hidden');
}

function showElementById (elementId){
    const element = document.getElementById(elementId);
     element.classList.remove('hidden');
}

function setBackgroundColor (elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function removeBackgroundColor (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
  }


 function getElementValueById(elementId){
      
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
 }

 function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
 }

 function getTextById (elementId){
   const element = document.getElementById(elementId);
   const text = element.innerText;
   return text;
 }


function getARandomAlphabet(){
    // get or create a alphabetString

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets)

    // get a random alphabet
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index]
    // console.log(alphabet,index);
    return alphabet;
    
    
}