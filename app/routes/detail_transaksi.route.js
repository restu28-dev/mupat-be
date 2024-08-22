module.exports = (app) => {
    const detail_transaksi = require('../controllers/detail_transaksi.controller');
    let router = require('express').Router();

    // Debugging
    console.log('detail_transaksi:', detail_transaksi);
    console.log('detail_transaksi.create:', detail_transaksi.create);
    console.log('detail_transaksi.readAll:', detail_transaksi.readAll);
    console.log('detail_transaksi.readById:', detail_transaksi.readById);
    console.log('detail_transaksi.update:', detail_transaksi.update);
    console.log('detail_transaksi.delete:', detail_transaksi.delete);

    if (!detail_transaksi.create || !detail_transaksi.readAll || !detail_transaksi.readById || !detail_transaksi.update || !detail_transaksi.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', detail_transaksi.create);
    router.get('/', detail_transaksi.readAll);
    router.get('/:id', detail_transaksi.readById);
    router.put('/:id', detail_transaksi.update);
    router.delete('/:id', detail_transaksi.delete);

    app.use('/api/detail_transaksi', router);
};

