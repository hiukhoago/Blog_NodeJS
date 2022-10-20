const mongoose = require('mongoose')

// const url = "mongodb+srv://hiukhoa:123456aA@cluster0.ixgjzgq.mongodb.net/dbBlog?retryWrites=true&w=majority"
// mongoose.connect(url)

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
})

const User = mongoose.model('User', UserSchema)
module.exports = User