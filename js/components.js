app.component('search',{	
		restrict: 'E',
		templateUrl: 'template/search.html',
		bindings:{
			items: '=',
			srchFunc:'&',
			inp:'='
		},
		controllerAs:"vm"
});

