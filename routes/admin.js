const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // res.send(
    //     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    // );
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
})

// /admin/add-product => POST
router.post('/product', (req, res, next) => {
    console.log(req.body); // body-parser를 사용하면 req.body를 사용할 수 있음.
    res.redirect('/'); // redirection함.
})

module.exports = router; 