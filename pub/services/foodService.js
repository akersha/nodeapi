angular.module('FoodService',[]).factory('Food',['$http','$q',function($http,$q){
	
	return {
		
		getAll:function(){
			var deferred = $q.defer();
			
			$http.get('/api/foods')
				.then(function(data){
					console.log(data);
					deferred.resolve(data);
				}, function(err){
					console.log(err);
					deferred.reject(err);
				});
			return deferred.promise;
		},
		get:function(id){
			var deferred = $q.defer();
			
			$http.get('/api/foods/' + id)
				.then(function(data){
					console.log(data);
					deferred.resolve(data);
				}, function(err){
					console.log(err);
					deferred.reject(err);
				});
			return deferred.promise;
		},
		create:function(foodData){
			var deferred = $q.defer();

			$http.put('/api/foods/', foodData)
				.then(function(data){
					console.log(data);
					deferred.resolve(data);
				}, function(err){
					console.log(err);
					deferred.reject(err);
				});
			return deferred.promise;

		},
		update:function(id, foodData){
			var deferred = $q.defer();
			
			$http.post('/api/foods/' + id, foodData)
				.then(function(data){
					console.log(data);
					deferred.resolve(data);
				}, function(err){
					console.log(err);
					deferred.reject(err);
				});
			return deferred.promise;
		},
		del:function(id){
			var deferred = $q.defer();
			
			$http.delete('/api/foods/' + id)
				.then(function(data){
					console.log(data);
					deferred.resolve(data);
				}, function(err){
					console.log(err);
					deferred.reject(err);
				});
			return deferred.promise;
		}
		
	}
}]);
