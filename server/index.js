// express.js

const path = require('path')
const express = require('express');
const productController = require('./controllers/products');
const userController = require('./controllers/users');
const app = express();

const PORT = 3000;

app
    .use('/', express.static(path.join( __dirname, '../client/dist/') ) )
    .use(express.json())

    .use('/api/v1/products', productController)
    .use('/api/v1/users', userController)

    .get('*', (req, res) => {
        res.sendFile(path.join( __dirname, '../client/dist/index.html') )
    });



console.log('1: Trying to start server...');

app.listen(PORT, () => {
    console.log(`2: Server is running at http://localhost:${PORT}`);
});

console.log('3: End of file, waiting for requests...');
