const { table } = require('console')
const path = require('path')
const dbPath = path.resolve(__dirname, './products.sqlite')
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  })


    
    

/*
knex.schema
    .hasTable('products')
        .then((exists) => {
            if (!exists) {
                return knex.schema.createTable('products', (table) => {
                    table.increments('id').primary()
                    table.string('title')
                    table.string('description')
                })
                .then(() => {
                    console.log('Table created')
                })
                .catch((error) => {
                    console.error('opesey')
                })
            }
        })
        .then(() => {
            console.log('done')
        })
        .catch((error) => {
            console.log('database setup error')
        })
    .hasTable('reviews')
        .then((exists) => {
            if (!exists) {
                return knex.schema.createTable('products', (table) => {
                    table.increments('id').primary()
                    table.integer('productid')
                    table.integer('rating')
                    table.string('comment')
                })
                .then(() => {
                    console.log('Table created')
                })
                .catch((error) => {
                    console.error('opesey')
                })
            }
        })
        .then(() => {
            console.log('done')
        })
        .catch((error) => {
            console.log('database setup error')
        })
*/
knex.select('*').from('products')
    .then(data => console.log('got it'))
    .catch(err => console.log(err))
knex.select('*').from('reviews')
    .then(data => console.log('got it'))
    .catch(err => console.log(err))

module.exports = knex