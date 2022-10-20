const express = require('express')
const userModel = require('../model/userModel')

const app = express()

//Add data
app.post('/add', async(req, res) => {
        const user = new userModel(req.body)
        try {
            await user.save()
            res.send('Created success: ' + user);
        } catch (error) {
            res.status(500).send(error)
        }
    })
    // List user
app.get('/list', async(req, res) => {
        try {
            const user = await userModel.find({})
            res.send(user)
        } catch (error) {
            res.status(500).send(error)
        }
    })
    // Update user
app.patch('/update/:id', async(req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body)
        await user.save()
        res.send('Updated: ' + user)
    } catch (error) {
        res.status(500).send(error)
    }
})
app.delete('/delete/:id', async(req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id, req.body)
        if (!user) {
            res.status(404).send("Item not found")
        } else {
            res.status(200).send('Deleted user id: ' + req.params.id)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = app;