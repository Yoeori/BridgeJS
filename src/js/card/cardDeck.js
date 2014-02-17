var CardDeck = Class.extend({
	
	cards : [],
	
	init : function() {
		this.cards = [];
		for(var i = 0; i < Card.prototype.validSuits.length; i++) {
			for(var o = 0; o < Card.prototype.validRanks.length; o++) {
				this.addCard(Card.prototype.validSuits[i], Card.prototype.validRanks[o]);
			}
		}
		
	},
	
	addCard : function(suit, rank) {
		this.cards[this.cards.length] = new Card(suit, rank);
	},
	
	drawRandomCard : function() {
		if(this.cards.length !== 0)
			return this.cards[Math.floor(Math.random()*this.cards.length)];
		return false;
	},
	
	drawRandomCardAndDelete : function() {
		if(this.cards.length !== 0) {
			var card = this.drawRandomCard();
			position = $.inArray(card, this.cards);
			if(~position) this.cards.splice(position, 1);
			return card;
		}
		return false;
	}
});