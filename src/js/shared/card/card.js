var Card = Class.extend({
	
	rank : "",
	suit : "",
	
	validSuits : ["♠", "♥", "♣", "♦"],
	validRanks : ["2", "3", "4", "5", "6", "7", "8", "9", "10", "B", "V", "K", "A"],
	
	init : function(suit, rank) {
		this.setSuit(suit);
		this.setRank(rank);
	},
	
	setSuit : function(suit) {
		if($.inArray(suit, this.validSuits) === -1) {
			console.error("Set card to non valid suit");
		}
		this.suit = suit;
	},
	
	setRank : function(rank) {
		if($.inArray(rank, this.validRanks) === -1) {
			console.error("Set card to non valid rank");
		}
		this.rank = rank;
	},
	
	getCardText : function() {
		if($.inArray(this.suit, ["♦", "♥"]) === -1)
			return this.rank+this.suit;
		else
			return this.rank+"<span style=\"color: red;\">"+this.suit+"</span>";
	},
	
	maxRank : function() {
		return this.validRanks[this.validRanks.length-1];
	},
	
	matchOtherCard : function(card) {
		return card.suit === this.suit && card.rank === this.rank;
	},
	
	matchOtherCards : function(cards) {
		var score = 0;
		for(card in cards) {
			score += card.suit === this.suit && card.rank === this.rank ? 1 : 0;
		}
		return score;
	}
});