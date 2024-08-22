module.exports = (app) => {
    const produk = require('../controllers/produk.controller');
    let router = require('express').Router();

    // Debugging
    console.log('produk:', produk);
    console.log('produk.create:', produk.create);
    console.log('produk.readAll:', produk.readAll);
    console.log('produk.readById:', produk.readById);
    console.log('produk.update:', produk.update);
    console.log('produk.delete:', produk.delete);

    if (!produk.create || !produk.readAll || !produk.readById || !produk.update || !produk.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', produk.create);
    router.get('/', produk.readAll);
    router.get('/:id', produk.readById);
    router.put('/:id', produk.update);
    router.delete('/:id', produk.delete);

    app.use('/api/produk', router);
};

