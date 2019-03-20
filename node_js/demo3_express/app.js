var experss = require('express')

var body = require('body-parser')
var fs = require('fs')
// var r = require('./index')
// console.log(r)
var app1 = experss()

// 静态文件，开放目录
function print(p) {
    console.log(p)
}

app1.use('/static/', experss.static('./static'))
// 使用body 可以获取表单提交的内容
app1.use(body.urlencoded({extended: false}))

function readFile(callback) {
    fs.readFile('./data/db.json', function (error, data) {
        if (error) {
            callback(error)
        } else {
            callback(null, JSON.parse(data.toString()))
        }
    })
}

function saveFile(query, callback) {
    console.log(query)
    fs.readFile('./data/db.json', function (error, data) {
        if (error) {
            callback(error)
        } else {
            var datas = JSON.parse(data.toString())
            console.log(datas)
            datas.push({user: query})
            console.log(datas)
            fs.writeFile('./data/db.json', JSON.stringify(datas), function (error) {
                if (error) {
                    callback(error)
                } else {
                    callback(null, datas)
                }

            })
        }
    })

}

// 配置使用 art-template
// 默认回去views目录底下去找模板文件 html 以.html结尾的文件
// 如果要修改目录 app1.set('views','./aa')
app1.engine('html', require('express-art-template'))
// app1.set('views','./aa')
app1.get('/', function (request, response) {
    response.render('index.html')
    // response.send("hello world")
})
app1.get('/post', function (request, response) {
    console.log(123)
    var query = request.query

    // var users =  readFile()
    if (JSON.stringify(query) !== "{}") {
        saveFile(query, function (error, data) {
            if (error) {
                response.send('404 not found!',)
            } else {
                response.render('post/post.html', {users: data})
            }
        })
        // users.push({user:query})
    } else {
        readFile(function (error, data) {
            if (error) {
                response.send('404 not found!',)
            } else {
                response.render('post/post.html', {users: data})
            }
        })
    }

    // response.send("hello world")
})
app1.post('/post', function (request, response) {

    var query = request.body
    if (JSON.stringify(query) !== "{}") {
        saveFile(query, function (error, data) {
            if (error) {
                response.send('404 not found!',)
            } else {
                response.redirect('/post')
            }
        })
        // users.push({user:query})
    } else {
        readFile(function (error, data) {
            if (error) {
                response.send('404 not found!',)
            } else {
                response.redirect('/post')
            }
        })
    }
    // response.send("hello world")
})
// app1.use(r)
app1.listen(3000, function () {
    console.log('running')
})