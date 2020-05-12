let cards = [
    {
        front: "card1 asd;fl asdflk aef;lewj f;oiweafj oweaijfkdj fa;si jfwea;oij fawe;oij f",
        back: "back1"
    },
    {
        front: "card2",
        back: "back2"
    },
    {
        front: "card3",
        back: "back3"
    }
]

let currentCard = 0;
let showFront = true;

let card  = document.querySelector("#card");

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
    console.log(currentCard);
    showFront = true;
    showCard();
}

showCard();