document.querySelector("#card");
let showFront = true;
function flipCard(){
    showFront = !showFront;
    showCard();
}

function showCard(){
    let text = showFront ? "front" : "back";
    document.querySelector("#card").innerText = text;
}

showCard();