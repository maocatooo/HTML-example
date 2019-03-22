// __filename 当前文件的绝对路径 （包含当前文件名）
// __dirname 当前文件的绝对路径的目录
var path = require('path')
var express = require('express')
var body = require('body-parser')
var BASEDIR = __dirname


var app = express()

// 静态文件，开放目录
app.use('/static/', express.static('./static'))
// 使用body 可以获取表单提交的内容
app.use(body.urlencoded({extended: false}))

// 使用模板
app.engine('html', require('express-art-template'))

app.use(require('./router'))


app.listen(3000,function () {
    console.log('running~~~~~')
})