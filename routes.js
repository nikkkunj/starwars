
	app.config(function($stateProvider, $urlRouterProvider,$locationProvider,$httpProvider) {
		$urlRouterProvider.otherwise('/login');
		$stateProvider.
		state("login", {
			url:'/login',
			templateUrl: "template/login.html",
			controller: 'loginController'
		}).
		state("planet", {
			url:'/home',
			templateUrl: "template/home.html",
			controller: 'searchPlanetController'
		});
	});
