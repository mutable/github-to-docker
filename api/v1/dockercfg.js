var assert = require('assert')

exports.parse = function(str) {
  var dockercfg = JSON.parse(str)
  return {
    configs: Object.keys(dockercfg).reduce(function(confs, reg) {
      var conf = dockercfg[reg]
        , data = new Buffer(conf.auth, 'base64').toString()
        , userpass = data.split(':')
      assert.equal(userpass.length, 2)
      var user = userpass[0]
        , pass = userpass[1]

      confs[reg] = {
        email: conf.email,
        username: user,
        password: pass,
        serverAddress: reg
      }
      return confs
    }, Object.create(null))
  }
}

