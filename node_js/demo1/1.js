var http = require('http')
var fs = require('fs')

http.
  createServer(function(request, response){
    console.log(request.url)
    response.end("123321")

  }).listen(3001, function(){
      console.log("message")
  })