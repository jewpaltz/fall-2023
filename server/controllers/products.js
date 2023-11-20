/* B"H
*/

const express = require('express');
const { getAll, get, search, create, update, remove, seed } = require('../models/products');
const router = express.Router();

router.get('/', (req, res, next) => {

    getAll()
    .then((products) => {
        res.send(products);
    })
    .catch(next)

})
.get('/search' , (req, res, next) => {

    search(req.query.q)
    .then((results) => {
        res.send(results);
    }).catch(next);

})
.get('/:id', (req, res, next) => {

  get(+req.params.id)
  .then((product) => {
    if(product) {
      res.send( product );
    }else {
      res.status(404).send({error: 'Product not found'});
    }
  }).catch(next);

})
.post('/', (req, res, next) => {

    create(req.body)
    .then((product) => {
        res.send(product);
    }).catch(next);

})
.patch('/:id', (req, res, next) => {
    
      req.body.id = +req.params.id;
      update(req.body)
      .then((product) => {
          res.send(product);
      }).catch(next);
  
})
.delete('/:id', (req, res, next) => {
    
      remove(+req.params.id)
      .then(() => {
          res.send({message: 'Product removed'});
      }).catch(next);

})
.post('/seed', (req, res, next) => {

  seed()
  .then(() => {
    res.send({message: 'Products seeded'});
  }).catch(next);

})

module.exports = router;