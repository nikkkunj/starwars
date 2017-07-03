app.factory('APIservice',function($http,$q,$filter){
	var APIservice ={};
	var success ={"error":"0","msg":"success","data":""};
	var error ={"error":"1","msg":"error in Processing","data":""};
	APIservice.loginUser = function(userdata){
		return $http({
			method:'GET',
			url:'http://swapi.co/api/people/'			
		}).then(function(response){
			var data = response.data.results;		
			var dlen = data.length;
		
			for(var i=0;i<dlen;i++){
				if(data[i].name==userdata.username && data[i].birth_year==userdata.passwd){
					success.data = data[i];
					return $q.resolve(success);
				}
				
			}
			return $q.resolve(error);
		},function(error){
			
			
		});
	}
	
	
		APIservice.getData = function(input){
		return $http({
			method:'GET',
			url:'http://swapi.co/api/planets/'			
		}).then(function(response){
			var data = response.data.results;
			data = $filter('filter')(data,{'name':input});
			data = $filter('limitTo')(data,5);	
			return $q.resolve(data);
		},function(error){
			
			
		});
	}
	
	
	
	return APIservice;
});
		
