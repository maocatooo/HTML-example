var express = require('express')
var router =express.Router()
router.get('/r',function(r,s){
    s.send("123")
})
module.exports = router