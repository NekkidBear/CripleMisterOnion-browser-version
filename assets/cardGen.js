function deckBuilder(){
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs", "Cups", "Staves", "Swords", "Coins"];

    const cards = [];
    for (let s in suits){
        for(let v in values){
            const value = values[v];
            const suit = suits[s];
            cards.push({value, suit});
        }
    }
    return cards;
}

function randomCard(cards) {
    const random = Math.floor(Math.random()*51);
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
}

const cards = deckBuilder();
randomCard(cards);