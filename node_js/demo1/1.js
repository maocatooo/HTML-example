var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')
var dict =[
  {name:"123444"},
  {name:"333"}
];
http.
  createServer(function(request, response){
    var parseObj = url.parse(request.url, true) // 对处理
    var pathname = parseObj.pathname //获取path路径
    console.log(pathname)
    if (pathname.indexOf('/static/') === 0)  {
      // 静态文件路径
      fs.readFile( "." + pathname, function (error, data) {
        if(error){
          response.end("404")
        }else{
          response.end(data)
        }
      })
    }
    if (pathname === '/' ||pathname === "/index.html") { 
      // 路由
      console.log("is url")
      fs.readFile("./views/index.html" , function(error,data){
        if(error){
          console.log(error)
          response.end("404")
        }else{
          var query = parseObj.query
          // 路径get请求
          if (JSON.stringify(query) !== "{}") {
            
            dict.push({name:query.text?query.text:""})
            
          }
          var htmlstr = template.render(data.toString(),{
            dict: dict
          })
          response.end(htmlstr)
        }
      })
    }

  }).listen(3001, function(){
      console.log("message")
  })