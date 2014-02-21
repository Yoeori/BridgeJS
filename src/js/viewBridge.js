//Handles inputs from model and displays them

var ViewBridge = Class.extend({
	
	model : 0,
	
	init : function(model) {
		this.model = model;
		
	},
	
	doAction : function(action, data) {
		switch(action) {
			case "renderCards":
				for(var i = 0; i < 4; i++) {
					$("[data-view=cardsP"+(i+1)+"]").empty();
					for(var o = 0; o < data.players[i].length; o++) {
						$("[data-view=cardsP"+(i+1)+"]").append("<li data-controller=\"cardClick\" data-data='"+JSON.stringify({"player": i, "cardSuit": data.players[i][o].suit, "cardRank": data.players[i][o].rank, "id" : o})+"\'>"+data.players[i][o].getCardText()+"</li>");
					}
				}
				this.model.controller.updateHooks();
				break;
			case "selectPlayer":
				for(var i = 0; i < 4; i++) {
					$("[data-view=p"+(i+1)+"]").css("font-weight","normal");
				}
				$("[data-view=p"+(data.player+1)+"]").css("font-weight","Bold");
				break;
			case "empty":
				for(var i = 0; i < 4; i++) {
					$("[data-view=p"+(i+1)+"]").css("font-weight","normal");
					$("[data-view=cardsP"+(i+1)+"]").empty();
					$("[data-view=currentcardp"+(i+1)+"]").empty();
					$("[data-view=scoret"+(i+1)+"]").empty();
					$("[data-view=fullscoret"+(i+1)+"]").text(0);
				}
				break;
			default:
				console.error("Unknown action called");
			
		}
	}
	
});