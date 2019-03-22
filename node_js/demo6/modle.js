var mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:27017/testNode1', { useNewUrlParser: true })
var Schema = mongoose.Schema

var userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type:String,
    },
    tag:{
      type:String,
      default:"人"
    }
})
module.exports.User = mongoose.model('User', userSchema)