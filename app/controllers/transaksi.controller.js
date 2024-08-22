const db = require('../models');
const transaksi = db.transaksi;

exports.create = async (req, res) => {
  try {
    const { nama_pemesan, nama_sepeda, tanggal_penyewaan, tanggal_pengembalian, durasi, jumlah_produk, metode_pembayaran } = req.body;

    const harga_per_jam = 12000; // Harga per jam
    const total_harga = durasi * harga_per_jam * jumlah_produk;
    const harga_per_jam_string = `${harga_per_jam.toLocaleString('id-ID')}/jam`; // Format harga

    const transaksi = await transaksi.create({
      nama_pemesan,
      nama_sepeda,
      tanggal_penyewaan,
      tanggal_pengembalian,
      durasi,
      jumlah_produk,
      total_harga,
      metode_pembayaran
    });

    res.status(201).send({
      message: "transaksi successfully created",
      data: transaksi
    });
  } catch (err) {
    res.status(500).send({
      message: "Error creating transaksi",
      error: err.message
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const transaksi = await transaksi.findAll();
    res.send(transaksi);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving data",
      error: err.message
    });
  }
};

exports.readById = async (req, res) => {
  try {
    const id = req.params.id;
    const transaksi = await transaksi.findByPk(id);

    if (!transaksi) {
      return res.status(404).send({
        message: "transaksi not found"
      });
    }

    res.send(transaksi);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving transaksi",
      error: err.message
    });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama_pemesan, nama_sepeda, tanggal_penyewaan, tanggal_pengembalian, durasi, jumlah_produk, metode_pembayaran } = req.body;

    const harga_per_jam = 12000; // Harga per jam
    const total_harga = durasi * harga_per_jam * jumlah_produk;
    const harga_per_jam_string = `${harga_per_jam.toLocaleString('id-ID')}/jam`; // Format harga

    const [updated] = await transaksi.update({
      nama_pemesan,
      nama_sepeda,
      tanggal_penyewaan,
      tanggal_pengembalian,
      durasi,
      jumlah_produk,
      total_harga,
      metode_pembayaran
    }, {
      where: { id }
    });

    if (!updated) {
      return res.status(404).send({
        message: "transaksi not found"
      });
    }

    res.send({
      message: "transaksi updated successfully"
    });
  } catch (err) {
    res.status(500).send({
      message: "Error updating transaksi",
      error: err.message
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await transaksi.destroy({
      where: { id }
    });

    if (!deleted) {
      return res.status(404).send({
        message: "transaksi not found"
      });
    }

    res.send({
      message: "transaksi deleted successfully"
    });
  } catch (err) {
    res.status(500).send({
      message: "Error deleting transaksi",
      error: err.message
    });
  }
};
