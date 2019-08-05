let username;

document.querySelector("#submitButton").addEventListener("click", function(){
    document.querySelector("#radios-0").checked ? start() : exit();
});

function start(){
    console.log("START");
    username = document.querySelector("#username").value;
    document.querySelector("#playerName").innerText += username;
    document.querySelector(".landing").classList.add("d-none");
    document.querySelector(".gametable").classList.remove("d-none");
}
function exit(){
    console.log("EXIT");
    alert("You are not old enough to use this site, goodbye!");
    window.location.href = "https://en.wikipedia.org/wiki/Problem_gambling";
}

// Created with help of https://wsvincent.com/javascript-object-oriented-deck-cards/
class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }
    
    reset(){
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
        // const numValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'F', 'F', 'F'];
  
        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }
    //   Fisher-Yates Shuffle
    shuffle(){
        const { deck } = this;
        let m = deck.length, i;
        // 
        while (m) {
            i = Math.floor(Math.random() * m--);
        
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        
        return this;
    }    
    deal(){
        return this.deck.pop();
    }  
}
const deck1 = new Deck();
console.log(deck1.deck);
deck1.reset();
console.log(deck1.deck);
deck1.shuffle();
console.log(deck1.deck);

let playerHand = [];
let computerHand = [];
document.querySelector("#dealbutton").addEventListener("click", function(){
    
    playerHand.push(deck1.deal());
    playerHand.push(deck1.deal());
    console.log(playerHand);
    computerHand.push(deck1.deal());
    computerHand.push(deck1.deal());
    console.log(computerHand);
});

