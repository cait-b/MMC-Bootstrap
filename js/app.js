(function(){
	var app = angular.module('quiz', []);
	
	app.controller('quizController', function(){
		this.qstn = questions;
	});
	
	var questions = [
		{
			question:"What is the average life expectancy of a pet rabbit?",
			options: ["0-2 years", "3-5 years", "5-7 years", "8-12"],
			answer: 3
		}
	]
})();