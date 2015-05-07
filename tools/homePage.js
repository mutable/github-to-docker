  var sendMarkdown =  require('./sendMarkdown')
  
  var homePage = function(req, res){
    res.send(sendMarkdown())
  }

  module.exports = homePage