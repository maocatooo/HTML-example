var experss = require('express')

var body = require('body-parser')
var fs = require('fs')
var r = require('./index')
console.log(r)
var app1 = experss()
// 静态文件，开放目录
function print(p){
    console.log(p)
}
app1.use('/static/',experss.static('./static'))
// 使用body 可以获取表单提交的内容
app1.use(body.urlencoded({ extended:false }))

function readFile(callback){
    fs.readFile('./data/db.json',function(error,data){
        if(error){
            callback(error)
        }
        else{
            callback()
        }
    })
        return JSON.parse(fs.readFileSync())
}
function saveFile(data){
    fs.writeFile('./data/db.json',JSON.stringify(data),function(error){
        if(error){
            print(error)
        }else{
        }

    })
}
// 配置使用 art-template 
// 默认回去views目录底下去找模板文件 html 以.html结尾的文件
// 如果要修改目录 app1.set('views','./aa')
app1.engine('html', require('express-art-template'))
// app1.set('views','./aa')
app1.get('/',function(request,response){
    response.render('index.html')
    // response.send("hello world")
})
app1.get('/post',function(request,response){
    console.log(readFile())
    var query = request.query
    print(query)
    var users =  readFile()
    if (JSON.stringify(query) !== "{}") {
       
       users.push({user:query})
    }
    response.render('post/post.html', {users:users})
    // response.send("hello world")
})
app1.post('/post',function(request,response){
    
    var query = request.body
    if (JSON.stringify(query) !== "{}") {
        var users = readFile()
        users.unshift({user:query})
        saveFile(users)
    }
    response.redirect('/post')
    // response.send("hello world")
})
app1.use(r)
app1.listen(3000,function(){
    console.log('running')
})