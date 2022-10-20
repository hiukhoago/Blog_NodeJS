const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})
const Account = mongoose.model('Account', AccountSchema)
module.exports = Account