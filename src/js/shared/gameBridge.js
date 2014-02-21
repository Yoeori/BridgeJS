var GameBridge = Class.extend({
	
	model : 0,
	deck : 0,
	
	isPlaying : false,
	currentPlayer : 0,
	
	init : function(model) {
		this.model = model;
		
	},
	
	onAction : function(action, data) {
		
		switch(action) {
			case "newGame":
				this.newGame();
				break;
			case "orderDeck":
				this.orderDeck();
				break;
			case "cardClick":
				this.handleCardClick(data);
				break;
			case "startGame":
				this.startGame();
				break;
			default:
				console.error("Encountered unknown action");
		}
		
		
	},
	
	startGame : function() {
		if(this.deck !== 0 && !this.isPlaying) {
			this.isPlaying = true;
			this.model.view.doAction("selectPlayer", {"player": this.currentPlayer});

		}
	},
	
	newGame : function() {
		if(!this.isPlaying) {
			this.model.view.doAction("empty", {});
			this.deck = new BridgeCardDeck();
			this.model.view.doAction("renderCards", this.deck);
		}
	},
	
	handleCardClick : function(data) {
		
		if(this.isPlaying && this.currentPlayer === data.player) {
			var currentcard = this.deck.players[this.currentPlayer][data.id];
			this.deck.deletePlayerCard(this.currentPlayer, currentcard);
			this.model.view.doAction("renderCards", this.deck);
			this.nextPlayer();
		}
	},
	
	nextPlayer : function() {
		this.currentPlayer = this.currentPlayer+1 === this.deck.players.length ? 0 : this.currentPlayer+1;
		this.model.view.doAction("selectPlayer", {"player": this.currentPlayer});
	},
	
	orderDeck : function() {
		if(this.deck !== 0) {
			this.deck.orderPlayerCards();
			this.model.view.doAction("renderCards", this.deck);
		}
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