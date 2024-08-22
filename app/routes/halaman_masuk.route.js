module.exports = (app) => {
    const halaman_masuk = require('../controllers/halaman_masuk.controller');
    let router = require('express').Router();

    // Debugging
    console.log('halaman_masuk:', halaman_masuk);
    console.log('halaman_masuk.create:', halaman_masuk.create);
    console.log('halaman_masuk.readAll:', halaman_masuk.readAll);
    console.log('halaman_masuk.readById:', halaman_masuk.readById);
    console.log('halaman_masuk.update:', halaman_masuk.update);
    console.log('halaman_masuk.delete:', halaman_masuk.delete);

    if (!halaman_masuk.create || !halaman_masuk.readAll || !halaman_masuk.readById || !halaman_masuk.update || !halaman_masuk.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', halaman_masuk.create);
    router.get('/', halaman_masuk.readAll);
    router.get('/:id', halaman_masuk.readById);
    router.put('/:id', halaman_masuk.update);
    router.delete('/:id', halaman_masuk.delete);

    app.use('/api/halaman_masuk', router);
};

