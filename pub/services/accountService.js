angular.module('AccountService',[]).factory('Account',['$http','$q',function($http,$q){
	
	return {
		
		getAll:function(){
			var deferred = $q.defer();
			
			$http.get('/api/accounts')
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
			
			$http.get('/api/accounts/' + id)
				.then(function(data){
					console.log(data);
					deferred.resolve(data);
				}, function(err){
					console.log(err);
					deferred.reject(err);
				});
			return deferred.promise;
		},
		create:function(accountData){
			var deferred = $q.defer();

			$http.put('/api/accounts/', accountData)
				.then(function(data){
					console.log(data);
					deferred.resolve(data);
				}, function(err){
					console.log(err);
					deferred.reject(err);
				});
			return deferred.promise;

		},
		update:function(id, accountData){
			var deferred = $q.defer();
			
			$http.post('/api/accounts/' + id, accountData)
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
			
			$http.delete('/api/accounts/' + id)
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
