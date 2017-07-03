app.controller('mainController',function($scope,APIservice,$filter,$state){
	$scope.userdata={};
	$scope.Login = function(){
		if($scope.userdata.userame =='' || $scope.userame ==null || $scope.userdata.passwd =='' || $scope.passwd ==null)
		{
			$scope.loginError=1;
			return;
		}
		APIservice.getUser($scope.userdata).then(function(resp){
			$scope.items=resp;
		},function(error){
			
		});
	}
});


app.controller('loginController',function($scope,APIservice,$filter,$state){
	$scope.showLoad=0;
	$scope.userdata={};
	$scope.login = function(){
		$scope.showLoad=1;
	//	console.log($scope.userdata);
		if($scope.userdata.username =='' || $scope.username ==null || $scope.userdata.passwd =='' || $scope.passwd ==null)
		{
			$scope.loginError=1;
			//return;
		}
		APIservice.loginUser($scope.userdata).then(function(resp){
			console.log(resp);
			$scope.showLoad=0;
			if(resp.error==0){
				$state.go('planet');
			}
			
		},function(error){
			$scope.showLoad=0;
			
		});
	}
});

app.controller('searchPlanetController',function($scope,APIservice,$filter){


	$scope.getData = function(){
		if($scope.inp =='' || $scope.inp ==null)
		{
			$scope.items="";
			return;
		}
		APIservice.getData($scope.inp).then(function(resp){
			$scope.items=resp;
			console.log(resp);
		},function(error){
			
		});
	}

});
