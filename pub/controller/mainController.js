angular.module('accountApp').controller('mainController', function($scope, Account){
	$scope.accounts = [];
	$scope.activeaccountItem = {};
	
	$scope.showDetailsForm = false;
	$scope.showCreateForm = false;
	
	$scope.getAllAccounts = function(){
		
		Account.getAll()
			.then(function(data){
				$scope.accounts = data;
			}, function(err){
				console.log("Could not load accounts");
			});
		
	}
	$scope.getAllAccounts();
	
	$scope.createAccount = function(data){
		
		Account.create(data)
			.then(function(data){
				console.log("account created");
				$scope.getAllAccounts();
			}, function(err){
				console.log("Could not create account");
			});
			
			$scope.showCreateForm = false;
		
	}
	
	$scope.updateAccount = function(accountItem){
		
		Account.update(accountItem._id, accountItem)
			.then(function(data){
				console.log("account updated");
				//$scope.accounts.concat(data);
				
				$scope.showDetailsForm = false;
				$scope.activeaccountItem = {};
				
			});
		
	}
	
	$scope.deleteAccount = function(accountItem){
	
		console.log("delete account");
		
		Account.del(accountItem._id)
			.then(function(data){
				console.log("account item deleted");
				$scope.getAllAccounts();
			}, function(err){
				console.log(err);
			})
			
			$scope.showDetailsForm = false;
			$scope.activeaccountItem = {};			
	
	}
	
	$scope.showDetails = function(accountItem){
		
		console.log(accountItem);
		
		$scope.showDetailsForm = true;
		$scope.activeaccountItem = accountItem;
	}

});