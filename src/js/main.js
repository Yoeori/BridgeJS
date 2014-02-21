var Main = Class.extend({
	
	deck : 0,
	controller : 0,
	view : 0,
	game : 0,
	
	
	init : function() {
		
		this.controller = new Controller(this);
		this.view = new ViewBridge(this);
		this.game = new GameBridge(this);
		
		
		object = this;
		
		$("#btnOrderCards").click(function() {
			if(object.deck !== 0) {
				object.deck.orderPlayerCards();
				object.renderDeck();
			}
		});
	},
	
	onAction : function(action, data) {
		
		this.game.onAction(action, data);
	},
	
});