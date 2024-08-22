module.exports = (app) => {
    const halaman_daftar = require('../controllers/halaman_daftar.controller');
    let router = require('express').Router();

    // Debugging
    console.log('halaman_daftar:', halaman_daftar);
    console.log('halaman_daftar.create:', halaman_daftar.create);
    console.log('halaman_daftar.readAll:', halaman_daftar.readAll);
    console.log('halaman_daftar.readById:', halaman_daftar.readById);
    console.log('halaman_daftar.update:', halaman_daftar.update);
    console.log('halaman_daftar.delete:', halaman_daftar.delete);

    if (!halaman_daftar.create || !halaman_daftar.readAll || !halaman_daftar.readById || !halaman_daftar.update || !halaman_daftar.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', halaman_daftar.create);
    router.get('/', halaman_daftar.readAll);
    router.get('/:id', halaman_daftar.readById);
    router.put('/:id', halaman_daftar.update);
    router.delete('/:id', halaman_daftar.delete);

    app.use('/api/halaman_daftar', router);
};

