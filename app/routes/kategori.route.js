module.exports = (app) => {
    const kategori = require('../controllers/kategori.controller');
    let router = require('express').Router();

    // Debugging
    console.log('kategori:', kategori);
    console.log('kategori.create:', kategori.create);
    console.log('kategori.readAll:', kategori.readAll);
    console.log('kategori.readById:', kategori.readById);
    console.log('kategori.update:', kategori.update);
    console.log('kategori.delete:', kategori.delete);

    if (!kategori.create || !kategori.readAll || !kategori.readById || !kategori.update || !kategori.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', kategori.create);
    router.get('/', kategori.readAll);
    router.get('/:id', kategori.readById);
    router.put('/:id', kategori.update);
    router.delete('/:id', kategori.delete);

    app.use('/api/kategori', router);
};

