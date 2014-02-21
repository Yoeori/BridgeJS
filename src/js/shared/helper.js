//Basic implementations en class helper

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function(){
	var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
	
	this.Class = function(){};
	
	Class.extend = function(prop) {
		var _super = this.prototype;
	 
		initializing = true;
		var prototype = new this();
		initializing = false;
	 
		for (var name in prop) {
			prototype[name] = typeof prop[name] == "function" &&
				typeof _super[name] == "function" && fnTest.test(prop[name]) ?
				(function(name, fn){
					return function() {
						var tmp = this._super;

						this._super = _super[name];

						var ret = fn.apply(this, arguments);				
						this._super = tmp;
					 
						return ret;
					};
				})(name, prop[name]) :
				prop[name];
		}

		function Class() {
			if ( !initializing && this.init )
				this.init.apply(this, arguments);
		}

		Class.prototype = prototype;
		Class.prototype.constructor = Class;
		Class.extend = arguments.callee;
		return Class;
	};
})();


//Tnx CMS from stackoverflow
Array.prototype.clean = function(deleteValue) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == deleteValue) {         
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};



if(typeof IS_SERVER === "undefined") {
	window.onresize = function() {


	};


	var game;

	window.onload = function() {

		window.onresize();
		game = new Main();

	};
}