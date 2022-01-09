const knex = require('../db')

exports.products = async (req,res) => {
    console.log('we hit the route...')
    knex
        .select('*')
        .from('products')
        .then(userData => {
            res.json(userData)
        })
        .catch(err => {
            res.json({ message: `failed to get products`})
        })

}


exports.notify= async() => {
    const connection = await db.client.acquireConnection();
    connection.query('LISTEN addedrecordp');
    connection.on('notification', (msg) => {
       console.log("got " + msg.channel + " payload " + msg.payload);
       
       })
    
    };


exports.reviews = async (req,res) => {
    knex
        .select('*')
        .from('reviews')
        .then(userData => {
            res.json(userData)
        })
        .catch(err => {
            res.json({ message: `failed to get reviews`})
        })

}

exports.postReviews = async (req,res) => {
    knex('reviews').insert(req.body)
        .then(() => {
            res.json({ message: `we did it`})
        })
}