//    function play(){
//      const homeSection = document.getElementById('home-screen');
//      homeSection.classList.add('hidden');
//     console.log(homeSection.classList)

//      const playgroundSection = document.getElementById('play-ground');
//      playgroundSection.classList.remove('hidden');
//         console.log(playgroundSection.classList)

//  }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed. you lost a life');
    }


}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
     const alphabet = getARandomAlphabet();
     console.log('your random alphabet', alphabet);

     const currentAlphabetElement = document.getElementById('current-alphabet');
     currentAlphabetElement.innerText = alphabet;


   setBackgroundColorById(alphabet);

    }



function play(){
    hideElementById('home-screen')
    showElementById('play-ground');
    continueGame()
}