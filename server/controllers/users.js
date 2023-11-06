// @ts-check
/* B"H
*/

const express = require('express');
const { getAll, get, search, create, update, remove, login, register } = require('../models/users');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.send(getAll());

})
.get('/search' , (req, res, next) => {

    const results = search(req.query.q);
    res.send(results);
})
.get('/:id', (req, res, next) => {

    const user = get(+req.params.id);
    res.send( user );

})
.post('/', (req, res, next) => {

    const user = create(req.body);
    res.send(user);

})
.post('/register', (req, res, next) => {

    const user = register(req.body);
    res.send(user);

})
.post('/login', (req, res, next) => {
    
    const user = login(req.body.email, req.body.password);
    res.send(user);

})
.patch('/:id', (req, res, next) => {
    
    req.body.id = +req.params.id;
    const user = update(req.body);
    res.send(user);
  
})
.delete('/:id', (req, res, next) => {
    
    remove(+req.params.id);
    res.send({message: 'User removed'});
});

module.exports = router;