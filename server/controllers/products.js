/* B"H
*/

const express = require('express');
const { getProducts, getProductById, search } = require('../models/products');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.send(getProducts());

})
.get('/search' , (req, res, next) => {

    const results = search(req.query.q);
    res.send(results);

})
.get('/:id', (req, res, next) => {

  const product = getProductById(+req.params.id);
  if(product) {
    res.send( product );
  }else {
    res.status(404).send({error: 'Product not found'});
  }

})

module.exports = router;