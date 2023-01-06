export class Card {
    id = null;

    cardFront = null;

    cardBack = 'images/reverse.jpg'

    currentImg = this.cardBack;

    constructor(id, cardFront) {
        this.id = id;
        this.cardFront = cardFront;
    }

    reverseCard() {
        (this.currentImg === this.cardBack) ? this.currentImg = this.cardFront : this.currentImg = this.cardBack;
    }
}
