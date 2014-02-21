//Handles inputs from the view and sends info to model

var Controller = Class.extend({
	
	model : 0,
	
	init : function(model) {
		this.model = model;
		this.updateHooks();
	},
	
	updateHooks : function() {
		
		$("[data-controller]:not([data-hascontroller]").click({"object" : this}, this.onAction).attr("data-hascontroller", true);
		
	},
	
	onAction : function(e) {
		e.data.object.model.onAction($(this).data("controller"), typeof $(this).data("data") !== "undefined" ? $(this).data("data") : {});
	}
	
});