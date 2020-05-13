let cards;

let currentCard = 0;
let showFront = true;

let card  = document.querySelector("#card");

async function getCards(){
    let response = await fetch("https://xsui7y6qu7.execute-api.us-east-1.amazonaws.com/prod/flashcards");
    cards = await response.json();
    cards = JSON.parse(cards.body);

    showCard();
}

function flipCard(){
    showFront = !showFront;
    showCard();
}

function showCard(){
    let text = showFront ? cards[currentCard].front : cards[currentCard].back;
    card.innerText = text;
}

function getNextCard(){
    currentCard < cards.length - 1 ? currentCard++ : currentCard = 0;
    showFront = true;
    showCard();
    //console.log(new Date().getTime())
}

getCards();