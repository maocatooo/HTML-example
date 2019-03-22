var mongoose = require('mongoose');

DB_URL = 'mongodb://mongo:27017/testNode';
mongoose.connect(DB_URL);


var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})
var User = mongoose.model('User', userSchema)
// var user = User({name:123})
// user.save(function (error,ret) {
//     if (error){
//         console.log(error)
//     }
//     else{
//         console.log(ret)
//     }
//
// })
User.findOne({name:123},function (error,ret) {
    if(error){
        console.log(error)
    }
    console.log(ret)
})