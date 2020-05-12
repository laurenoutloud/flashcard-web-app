let card  = document.querySelector("#card");
let showFront = true;
function flipCard(){
    showFront = !showFront;
    showCard();
}

function showCard(){
    let text = showFront ? "front" : "back";
    card.innerText = text;
}

function generateDeckList() {
    
}

showCard();