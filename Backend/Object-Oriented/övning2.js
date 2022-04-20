class Card {
  constructor(value, suite, faceDown = false) {
    this.value = value;
    this.suite = suite;
    this.faceDown = faceDown;
  }
  static SUITES = ["HEARTS", "SPADES", "CLUBS", "DIAMONS"];
  static VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  getValue() {
    switch (this.value) {
      case 1:
        return "A";
      case 13:
        return "K";
      case 12:
        return "Q";
      case 11:
        return "J";
      default:
        return this.value;
    }
  }
}

class Deck {
  constructor() {
    this.card = [];
  }

  static generateDeck() {
    const deck = new Deck();
    for (let suite of Card.SUITES) {
      for (let value of Card.VALUES) {
      }
    }
  }
  addCard(card) {
    this.card.push(card);
  }

  drawCard() {
    return this.card.pop();
  }
  shuffle() {
    this.cards.sort((a, b) => Math.random() - 0.5);
  }
}
const deck = new Deck();

const card1 = new Card(5, "HEARTS", false);
const card2 = new Card(7, "SPADES", false);
const card3 = new Card(10, "CLUBS", false);
const card4 = new Card(2, "DIAMONS", false);

deck.addCard(card1);
deck.addCard(card2);
deck.addCard(card3);
deck.addCard(card4);

console.log(card1);
