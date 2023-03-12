const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;


function flipCard(e) {
    let clickedCard = e.target;

    if (clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip");
        if (!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;

        let cardOneImg = cardOne.querySelector("img").src;
        let cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2){
    if (img1 === img2){
        matchedCard++;
        if (matchedCard === 8){
            setTimeout(() => {
                let h1 = document.querySelector('.winner h1');
                h1.innerHTML="Congratulations!!!";
            }, 400);
            setTimeout(() => {
                let h1 = document.querySelector('.winner h1');
                h1.innerHTML="";
            }, 2800);
            setTimeout(() => {
                return shuffleCard();
            }, 3000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = "";
        cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(()=>{
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = "";
        cardTwo = "";
        disableDeck = false;
    }, 1200);


}

function shuffleCard(){
    matchedCard = 0;
    cardOne = "";
    cardTwo = "";
    disableDeck = false;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    for (let i = 0; i < cards.length ; i++) {
        let card = cards[i];
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `images/img-${arr[i]}.png`;
        // adding click event to all cards
        card.addEventListener("click", flipCard);
    }
}

shuffleCard();

for (let i = 0; i < cards.length ; i++) {
    let card = cards[i];
     // adding click event to all cards
    card.addEventListener("click", flipCard);
}