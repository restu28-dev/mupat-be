module.exports = (app) => {
    const halaman_admin = require('../controllers/halaman_admin.controller');
    let router = require('express').Router();

    // Debugging
    console.log('halaman_admin:', halaman_admin);
    console.log('halaman_admin.create:', halaman_admin.create);
    console.log('halaman_admin.readAll:', halaman_admin.readAll);
    console.log('halaman_admin.readById:', halaman_admin.readById);
    console.log('halaman_admin.update:', halaman_admin.update);
    console.log('halaman_admin.delete:', halaman_admin.delete);

    if (!halaman_admin.create || !halaman_admin.readAll || !halaman_admin.readById || !halaman_admin.update || !halaman_admin.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', halaman_admin.create);
    router.get('/', halaman_admin.readAll);
    router.get('/:id', halaman_admin.readById);
    router.put('/:id', halaman_admin.update);
    router.delete('/:id', halaman_admin.delete);

    app.use('/api/halaman_admin', router);
};

