module.exports = (app) => {
    const transaksi_diantar = require('../controllers/transaksi_diantar.controller');
    let router = require('express').Router();

    // Debugging
    console.log('transaksi_diantar:', transaksi_diantar);
    console.log('transaksi_diantar.create:', transaksi_diantar.create);
    console.log('transaksi_diantar.readAll:', transaksi_diantar.readAll);
    console.log('transaksi_diantar.readById:', transaksi_diantar.readById);
    console.log('transaksi_diantar.update:', transaksi_diantar.update);
    console.log('transaksi_diantar.delete:', transaksi_diantar.delete);

    if (!transaksi_diantar.create || !transaksi_diantar.readAll || !transaksi_diantar.readById || !transaksi_diantar.update || !transaksi_diantar.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', transaksi_diantar.create);
    router.get('/', transaksi_diantar.readAll);
    router.get('/:id', transaksi_diantar.readById);
    router.put('/:id', transaksi_diantar.update);
    router.delete('/:id', transaksi_diantar.delete);

    app.use('/api/transaksi_diantar', router);
};

