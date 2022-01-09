const express = require('express')

const router = express.Router()

const dbRoutes = require('./../controllers/db-controller.js')

router.get('/', (req,res) => {
    const data = {
        username: 'testuser',
        justice: true
    }
    res.json(data)
})

router.get('/products', dbRoutes.products)

router.get('/reviews', dbRoutes.reviews)

router.post('/reviews', dbRoutes.postReviews)

module.exports = router