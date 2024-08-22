module.exports = (app) => {
    const transaksi_dijemput = require('../controllers/transaksi_dijemput.controller');
    let router = require('express').Router();

    // Debugging
    console.log('transaksi_dijemput:', transaksi_dijemput);
    console.log('transaksi_dijemput.create:', transaksi_dijemput.create);
    console.log('transaksi_dijemput.readAll:', transaksi_dijemput.readAll);
    console.log('transaksi_dijemput.readById:', transaksi_dijemput.readById);
    console.log('transaksi_dijemput.update:', transaksi_dijemput.update);
    console.log('transaksi_dijemput.delete:', transaksi_dijemput.delete);

    if (!transaksi_dijemput.create || !transaksi_dijemput.readAll || !transaksi_dijemput.readById || !transaksi_dijemput.update || !transaksi_dijemput.delete) {
        throw new Error('Fungsi controller tidak ditemukan!');
    }

    router.post('/', transaksi_dijemput.create);
    router.get('/', transaksi_dijemput.readAll);
    router.get('/:id', transaksi_dijemput.readById);
    router.put('/:id', transaksi_dijemput.update);
    router.delete('/:id', transaksi_dijemput.delete);

    app.use('/api/transaksi_dijemput', router);
};

