var Main = Class.extend({
	
	deck : 0,
	
	init : function() {
		
		object = this;
		$("#btnNewGame").click(function() {
			object.deck = new BridgeCardDeck();
			object.renderDeck();
		});
		
		$("#btnOrderCards").click(function() {
			if(object.deck !== 0) {
				object.deck.orderPlayerCards();
				object.renderDeck();
			}
		});
	},
	
	
	renderDeck : function() {
		for(var i = 0; i < 4; i++) {
			$("#cardsP"+(i+1)).empty();
			for(var o = 0; o < this.deck.players[i].length; o++) {
				$("#cardsP"+(i+1)).append("<li>"+this.deck.players[i][o].getCardText()+"</li>");
			}
		}
	}
	
});