var path = require('path')
  , fs  = require('fs')
  , marked = require('marked')
  , cache = ""
  , send = function(dir){
    if(cache) return cache
    cache = build(process.env.SERVICE_NAME || "Missing Service Name" +" \n===")

    fs.readFile(path.join(__dirname,'../readme.md'), function (err, data) {
      if (err) return console.error("Missing Service Contract (README.md)")
       cache = build(data.toString())
    })

    return cache
  }
  
function build(markdown){

    var html = "<html><head>"
    html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">'
    html += "<style>body{font-family: arial;padding: 20px;}</style>"
    html += "</head><body>"
    html += marked(markdown)
    html += "</body></html>"

    return html
}

send()

module.exports = send