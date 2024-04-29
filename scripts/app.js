
/*-------------------------------- Constants --------------------------------*/

const randomizer= document.getElementById('randomizer');
//const audioPlayer = document.querySelector('#audio') 
//const workIt = document.getElementById('work_it')
const playCards = document.getElementById('player')
.childNodes
/*-------------------------------- Variables --------------------------------*/
for (let i = 0; i < playCards.length; i++) {
    const card = playCards[i]
    card.addEventListener('click', () => playMusic(card))
}

let userChoice = () => {
    console.log ("Play random squares!");
};

let audio= document.querySelector('audio');

let playMusic = (selectedCard) => {
    const selectedCardId = selectedCard.id;

let audio;
    if (selectedCardId === 'work_it') {
        audio = new Audio(`./sounds/work_it.wav`);
    } else if (selectedCardId === 'make_it') {
        audio = new Audio(`./sounds/make_it.wav`);
    } else if (selectedCardId === 'do_it') {
        audio = new Audio(`./sounds/do_it.wav`);
    } else if (selectedCardId === 'makes_us') {
        audio = new Audio(`./sounds/makes_us.wav`);
    } else if (selectedCardId === 'harder') {
        audio = new Audio(`./sounds/harder.wav`);
    } else if (selectedCardId === 'better') {
        audio = new Audio(`./sounds/better.wav`);
    } else if (selectedCardId === 'faster') {
        audio = new Audio(`./sounds/faster.wav`);
    } else if (selectedCardId === 'stronger') {
        audio = new Audio(`./sounds/stronger.wav`);
    } else if (selectedCardId === 'more_than') {
        audio = new Audio(`./sounds/more_than.wav`);
    } else if (selectedCardId === 'hour') {
        audio = new Audio(`./sounds/hour.wav`);
    } else if (selectedCardId === 'our') {
        audio = new Audio(`./sounds/our.wav`);
    } else if (selectedCardId === 'never') {
        audio = new Audio(`./sounds/never.wav`);
    } else if (selectedCardId === 'ever') {
        audio = new Audio(`./sounds/ever.wav`);
    } else if (selectedCardId === 'after') {
        audio = new Audio(`./sounds/after.wav`); 
    } else if (selectedCardId === 'work_is') {
        audio = new Audio(`./sounds/work_is.wav`);
    } else if (selectedCardId === 'over') {
        audio = new Audio(`./sounds/ever.wav`);
    }
  if (audio) {
    audio.play ();
  }
};

 
 console.log('Yea I did it');

randomizer.addEventListener('click', () => {
    playAllSounds ();
});

let playAllSounds = () => {
    const soundsIds = ['work_it', 'make_it,', 'do_it',
'makes_us', 'harder', 'better', 'faster', 'stronger', 'more_than', 'hour', 'our', 
'never', 'ever', 'after', 'work_is', 'over']

soundsIds.forEach(soundId => {
    const audio = new Audio(`./sounds/${soundId}.wav`)
    audio.play();
});
    };