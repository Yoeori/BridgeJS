var BridgeCardDeck = CardDeck.extend({
	
	players : [[], [], [], []],
	
	init : function() {
		this.players = [[], [], [], []];
		this._super();
		for(var i = 0; i < 4; i++) {
			for(var o = 0; o < 13; o++) {
				this.players[i][this.players[i].length] = this.drawRandomCardAndDelete();
			}
		}
	},
	
	addCard : function(suit, rank) {
		this.cards[this.cards.length] = new BridgeCard(suit, rank);
	},
	
	
	orderPlayerCards : function() {
		for(var player = 0; player < this.players.length; player++) {
			var orderedSuit = [[], [], [], []];
			for(var j = 0; j < this.players[player].length; j++) {
				card = this.players[player][j];
				orderedSuit[$.inArray(card.suit, Card.prototype.validSuits)].push(card);
			}
			this.players[player] = [];
			var orderedRank = [[], [], [], []];
			for(var j = 0; j < orderedSuit.length; j++) {
				for(var k = 0; k < orderedSuit[j].length; k++) {
					orderedRank[j][$.inArray(orderedSuit[j][k].rank, Card.prototype.validRanks)] = orderedSuit[j][k];
				}
				orderedRank[j].clean(undefined);
			}
			this.players[player] = orderedRank[0].concat(orderedRank[1]).concat(orderedRank[2]).concat(orderedRank[3]);
		}
		
	}
	
});