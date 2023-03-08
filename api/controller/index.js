const express = require('express')

const path = require('path');

const parser = require('body-parser')

const router = express.Router();

const {User, Product} = require('../model')

const user = new User();

const product = new Product();

router.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// Register User

router.post('/login', parser.json(), (req, res) => {
    user.createUser(req, res);
})

// Login 

router.post('/login', parser.json(), (req, res) => {
    user.login(req, res);
})

// View all users 

router.get('/users', (req, res) => {
    user.fetchUsers(req, res);
})

// View single user

router.get('/user/:id', (req, res) => {
    user.fetchUser(req, res);
})

// Update user

router.put('/user/:id', parser.json(), (req, res) => {
    user.updaterUser(req, res);
})

// Delete user 

router.delete('/user/:id', (req, res) => {
    user.deleteUser(req, res);
})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create a new product

router.post('/product', parser.json(), (req, res) => {
    product.addProduct(req, res);
})

// View all products

router.get('/products', (req, res) => {
    user.fetchProducts(req, res);
})

// View single product

router.get('/product/:id', (req, res) => {
    product.fetchProduct(req, res);
})

// Update product

router.put('/product/:id', parser.json(), (req, res) => {
    product.updateProduct(req, res);
})

// Delete product

router.delete('/product/:id', (req, res) => {
    product.deleteProduct(req, res);
})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------



module.exports = router;