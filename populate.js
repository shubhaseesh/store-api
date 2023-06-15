require('dotenv').config()

const Product = require('./models/product')

const conn = require('./db/connect')

const jsonData = require('./products.json')


const start = async () => {
    try {
        await conn(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonData)
        console.log('Success')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)        
    }
}

start();
