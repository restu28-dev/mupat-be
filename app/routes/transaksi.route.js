module.exports = (app) => {
    const transaksi = require('../controllers/transaksi.controller');
    let router = require('express').Router();

    // Debugging
    console.log('transaksi:', transaksi);
    console.log('transaksi.create:', transaksi.create);
    console.log('transaksi.readAll:', transaksi.readAll);
    console.log('transaksi.readById:', transaksi.readById);
    console.log('transaksi.update:', transaksi.update);
    console.log('transaksi.delete:', transaksi.delete);

    if (!transaksi.create || !transaksi.readAll || !transaksi.readById || !transaksi.update || !transaksi.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', transaksi.create);
    router.get('/', transaksi.readAll);
    router.get('/:id', transaksi.readById);
    router.put('/:id', transaksi.update);
    router.delete('/:id', transaksi.delete);

    app.use('/api/transaksi', router);
};
