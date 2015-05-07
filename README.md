NodeMicro
===

- Apis
- Config
- Service Discovery and Config manager
- Resources


APIs
---
Fill this in 
all routes beginning /api/v1
go to file ./api/v1/index.js


Config
---

Go to the config tab and set it with what ever info

```json

```

Service Discovery and Config manager
===

## API
```js
var lsq = require('lsq')
```

  All methods are asynchronous, and take a node-style error-first callback as last argument.
  If no callback is supplied, a promise is returned instead.


Service Discovery
---


### lsq.services.list() -> Array<String>

  Returns all the currently known service names.

### lsq.services.get(service: String) -> Service

  Retrieves a particular service.



Example:
```js

  lsq.services.get("email")
    .then(function(service){
       request.post('http://'+service+'/api/v1/demo/email'
        ,{json:req.body}
        , function (error, response, body) {
          if(error){
            console.error('can not reach email service')
            return res.send(500,{error:error,result:'can not reach email service'})
          } 
          res.send({result:"email sent"})
        })
    })

```

or 


```js

  lsq.services.get("email",function(config){

    // returns a object 
    // {"hostname":"127.0.0.1", "port":3001, toString(): "127.0.0.1:3001" }
    // in a string it prints concat host and port

     request.post('http://'+service+'/api/v1/demo/email'
      ,{json:req.body}
      , function (error, response, body) {
        if(error){
          console.error('can not reach email service')
          return res.send(500,{error:error,result:'can not reach email service'})
        } 

        res.send({result:"email sent"})
      })
  })

```

### Service

  * `hostname`: String // the hostname or IP address of the service
  * `port`: Integer // the port of the service
  * `toString() { return this.hostname + ':' + this.port }`

Config
---


### lsq.config.get() -> JSON

  Fetches the JSON configuration for the current service.

Example:
```js

  lsq.config.get()
    .then(function(config){
      // returns a object {}
    })

```

or 


```js

  lsq.config.get(function(config){
     // returns a object {}
  })

```

Resources
---
- [Service Discovery and Config](https://github.com/lsqio)
- [LSQ.io Docs](https://github.com/lsqio/docs)




