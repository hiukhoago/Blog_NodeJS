const express = require('express')

var router = express.Router()

router.get('/', (req, res) => {
    res.json('This is product page.')
})
router.post('/', (req, res) => {
    res.json('This is product page of ' + req.body.name + ' & title is: ' + req.headers.title)
})
router.put('/:id', (req, res) => {
    res.json('This is product page.')
})
router.delete('/:id', (req, res) => {
    res.json('This is product page.')
})
router.get('/list', (req, res) => {
        res.json('This is list-product page.')
    })
    //Có tham số params nên để dưới cùng vì sẽ bị trùng với mấy cái ở trên
router.get('/:id', (req, res) => {
    res.json('This is detail product ' + req.params.id)
})

module.exports = router