/**
 * This module creates a deck of cards for Cripple Mr. Onion. It differs from the standard 52-card deck
 * in several ways. 
 *  There are 8 suits (In this game I used the German and Spanish suits because that is what the
 *      free spritesheet came with.)
 *  The deck also contains alternative cards for wilds and jokers.
 */

const SUITS  = ["Coins","Staves", "Cups", "Swords", "Shields", "Acorns", "Hearts", "Leaves"];
const RANKS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "Jack", "Queen", "King"];

class Card {
    constructor(){
        this.rank ="";
        this.suit ="";
        this.base_value = 0;
        this.modified_value = this.base_value;
    }
}

class Deck {
    /** Each Deck contains 104 cards. Each card has a Suit, a Rank, a sprite and a value. The value can fluctuate depending on the round and modifiers
 * in effect, but in general, Aces are 1, 2-9 are face value, and Jack, Queen, King are worth 10.
*/
    constructor(){    
        this.deck = [];
        this.shuffle();
        this.reset();
        
        for (let suit in SUITS){
            for(let rank in RANKS){
                switch (rank){
                    case "Ace":
                        base_value = 1;
                        break;
                    case "Jack", "Queen", "King":
                        base_value = 10;
                        break;
                    default: 
                        base_value = Number(rank);
                };
                console.log (rank, suit, base_value);
                this.deck.push(Card.rank, Card.suit, Card.base_value);

            }
        }
    }
}

let newDeck = Deck;
console.log(newDeck);