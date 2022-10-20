const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
    //Chú ý đổi tên password và tên database
const url = "mongodb+srv://hiukhoa:123456aA@cluster0.ixgjzgq.mongodb.net/dbBlog?retryWrites=true&w=majority"
const app = express()
const port = 3000
var router = require('./api.js')
var accountRouter = require('../routes/accountRoute.js')
var userRouter = require('../routes/userRoute')
var bodyParser = require('body-parser')

//HTTP logger
app.use(morgan('combined'))

mongoose.connect(url)

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

var checkLogin = (req, res, next) => {
    if (true) {
        console.log('Đăng nhập thành công')
        next()
    } else {
        return cosole.log('Đăng nhập thất bại')
    }
}
var checkAdmin = (req, res, next) => {
        //chỉ cần kiểm tra role là admin, không cần kiểm tra đăng nhập.
    }
    //req,res này giống với middleware checkLogin
app.get('/', checkLogin, (req, res, next) => {
    res.json('Data')
})

app.use('/admin/api/v1/', router)
app.use('/admin/api/v1/product/', router)
app.use('/api/v1/', router)
app.use('/api/account', accountRouter)
app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Start on: http://localhost:${port}`)
})