var express = require('express');

var Account = require('./models/accountModel');

module.exports = function(app){
	var router = express.Router();
	var idxRouter = express.Router();
	
	router.route('/accounts')
	.post(function(req,res){
		//CREATE new account
		
		var name = req.body.name;
		var servingSize = req.body.emailAddress;
		var calories = req.body.department;
		
		var account = new Account({
			name: name,
			emailAddress: emailAddress,
			department: department
		});
		
		account.save(function(err,account){
			if(err) res.send({error:err});
			res.json({message:'Account added', account:account});
		});
	})
	.get(function(req,res){
		//RETRIEVE all accounts
		Account.find({}, function(err, accounts){
			if(err) res.send({error:err});
			res.json(accounts);
		})
	});
	
	router.route('/accounts/:id')
	.get(function(req,res){
		//RETRIEVE account by id
		var id = req.params.id;
		Account.findById(id, function(err, account){
			if(err) res.send({error:err});
			res.json(account);
		});
	})
	.put(function(req,res){
		//UPDATE an account by id
		var id = req.params.id;
		var name = req.body.name;
		var emailAddress = req.body.emailAddress;
		var calories = req.body.department;
		
		Account.findById(id, function(err, account){
			if(err) res.send({error:err});
			
			account.name = name;
			account.emailAddress = emailAddress;
			account.department = department;
			
			account.save(function(err,account){
				if(err) res.send({error:err});
				res.json({message:'Account updated'});
			});
		});
		
	})
	.post(function(req,res){
		//UPDATE an account by id
		var id = req.params.id;
		var name = req.body.name;
		var emailAddress = req.body.emailAddress;
		var department = req.body.department;
		
		Account.findById(id, function(err, account){
			if(err) res.send({error:err});
			
			account.name = name;
			account.emailAddress = emailAddress;
			account.department = department;
			
			account.save(function(err,account){
				if(err) res.send({error:err});
				res.json({message:'Account updated'});
			});
		});
	})
	.delete(function(req,res){
		//DELETE an account by id
		var id = req.params.id;
		var name = req.body.name;
		var emailAddress = req.body.emailAddress;
		var department = req.body.department;
		
		Account.findById(id, function(err, account){
			if(err) res.send({error:err});
			
			Account.remove({_id:id}, function(err,account){
				if(err) res.send({error:err});
				res.json({message:'Account deleted'});
			});
		});
	});
	
	//Keep as last route
	idxRouter.route('/*', function(req,res){
		//res.end("Return to Angular");
		res.sendFile(__dirname + '/pub/index.html');
	});
	
	app.use('/api', router);
	app.use('/', idxRouter);
}
	
