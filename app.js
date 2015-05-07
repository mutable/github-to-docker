var express = require('express')
  , lsq = require('lsq')
  , http = require('http')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , debug = require('debug')
  , methodOverride = require('method-override')
  , log = debug('app:log')
  , error = debug('app:error')
  , app = express()
  , tools = require('./tools')
  , mainRoutes = require('./routes')
  , multer = require('multer')
  , lessMiddleware = require('less-middleware')
  , path = require('path')
  , everyauth = require('everyauth')
  , session = require('express-session');


  everyauth.github
    .appId(process.env.GITHUBID)
    .appSecret(process.env.GITHUBTOKEN)
    .findOrCreateUser( function (session, accessToken, accessTokenExtra, githubUserMetadata) {
      return {"_id":0,session:session,accessToken:accessToken,accessTokenExtra:accessTokenExtra, githubUserMetadata:githubUserMetadata}
    })
    .scope("user,user:email,repo")
    .redirectPath('/#repo')

  app
  .set('port', process.env.PORT || 3000)
  .set('trust proxy', 1)
  .set('view engine', 'jade')
  .use(session({ secret: 'keyboard cat'}))
  .use(everyauth.middleware())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(methodOverride('_method'))
  .use(tools.getReportingInfo(tools.report))
  .use('/api/v1/',require('./api/v1'))
  .use(multer())
  .use(express.static('public'))
  .use(lessMiddleware(path.join(__dirname + '/public')))
  .get('/',mainRoutes.homePage)
  .get('/test', tools.test)
  .get('/session', function(req,res){
    res.send(req.session)
  })
  .get('/health',tools.healthCheck)
  .listen(app.get('port'),function(){
    console.log("Express server listening on port " + app.get('port'))
  })
