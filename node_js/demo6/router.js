var express = require('express')
var modle = require('./modle')
var User = modle.User
var router = express.Router()

router.get('/index', function (req, res) {
    User.find()
        .then(
            function (users) {
                console.log(users)
                res.render('index.html', {
                    users: users
                })
            }
        )

})

router.get('/', function (req, res) {
    res.redirect('/index')
})


router.get('/edit', function (req, res) {
    res.send("edit")
})
/*
* 修改
*/
router.get('/edit', function (req, res) {
    res.send("edit")
})

router.get('/add', function (req, res) {
    res.render('add.html')
})
router.post('/add', function (req, res) {
    new User(req.body).save()
        .then(function (data) {
            console.log(data)
            res.redirect("/")
        }, function (error) {
            res.status(405).send("参数数格式不正确")
        })
})
module.exports = router