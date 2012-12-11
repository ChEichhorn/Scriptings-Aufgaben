// ==================
// = Backbone Start =
// ==================

var SemesterApp = Backbone.View.extend({
	el : "body",

	semester: window.semester,
	
	name : "Semesterübersicht",
	
	initialize : function(){
		this.template = _.template( $('#app-view').html() );
		console.log("Ich bin eine View des Semesters!",this);
		this.render();
	},

	render: function(){
		var viewHtml = this.template(this);
		this.$el.html(viewHtml);
	}

});

$(function(){
	
	var app = new SemesterApp();
	
	console.log(app);
	
});