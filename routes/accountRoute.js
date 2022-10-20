const express = require('express')
const accountModel = require('../model/accountModel')

var app = express.Router()

//Register
app.post('/register', (req, res, next) => {
        // const account = new accountModel(req.body)
        accountModel.findOne({
                username: req.body.username
            })
            .then(data => {
                if (data) {
                    res.json('Username exist.')
                } else {
                    return accountModel.create({
                        username: req.body.username,
                        password: req.body.password
                    })
                }
            })
            .then(data => {
                res.json('Created success.')
            })
            .catch(err => {
                res.status(500).json('Created fail.')
            })
    })
    //Login 
app.post('/login', (req, res, next) => {
        accountModel.findOne({
                username: req.body.username,
                password: req.body.password
            })
            .then(data => {
                if (data) {
                    res.json('Login success.')
                } else {
                    res.status(400).json('Incorrect Username or Password ')
                }
            })
            .catch(err => {
                res.status(500).json('Server fail.')
            })
    })
    //Get all data
app.get('/', (req, res, next) => {
        accountModel.find({})
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                res.status(500).json('Get all data account fail.')
            })
    })
    //Get detail
app.get('/:i', (req, res, next) => {
        accountModel.findById(req.params.i)
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                res.status(500).json('Get detail data account fail.')
            })
    })
    //Create data
app.post('/create', (req, res, next) => {

    })
    //update data new password
app.put('/update/:id', (req, res, next) => {
        accountModel.findByIdAndUpdate(req.params.id, { password: req.body.password })
            .then(data => { res.json('Update success.') })
            .catch(err => { res.status(500).json('Update fail.' + err) })
    })
    //Delete data
app.delete('/delete/:id', (req, res, next) => {
    accountModel.findByIdAndDelete(req.params.id)
        .then(data => {
            res.json('Delete success.')
        }).catch(err => { res.status(500).json('Delete fail.' + err) })
})
module.exports = app