var tooBusy = require("toobusy-js")


var healthCheck = function(req,res){
	res.send(tooBusy.lag()+"")
}

module.exports = healthCheck