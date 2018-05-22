const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = 'mongodb://socio_user:socio_pass@ds111648.mlab.com:11648/raghavsocio';
const account = require('../models/account');

mongoose.connect(db,function (err) {
	if(err)
		console.log(err);
})

router.get('/',function(req,res){
	account.find().exec(function(err,account){
		if(err)
			console.log(err)
		res.json(account)
	})
	// res.send('Express Router is Working!');
});


module.exports = router;
