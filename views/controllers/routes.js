	var form= angular.module('form', ['ngRoute']);

	form.config(function($routeProvider) {
		$routeProvider

			
			.when('/', {
				templateUrl : 'views/Regi.ejs',
				controller  : 'mainController'
			})

			
			.when('/login', {
				templateUrl : 'views/Login.ejs',
				controller  : 'aboutController'
			})

			
			
	});