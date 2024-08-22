const fs = require("fs");
const path = require("path");
const multer = require("multer");
const db = require('../models');
const detail_transaksi = db.detail_transaksi; // Pastikan nama model benar

const uploadDir = 'resource/static/assets/uploads';

// Konfigurasi Multer untuk meng-upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan timestamp untuk nama file unik
  }
});

const upload = multer({ storage: storage }).single('file');

// Fungsi untuk menghitung total
const calculateTotal = (jumlah_produk, harga_produk) => jumlah_produk * harga_produk;

exports.create = (req, res) => {
  // Upload file sebelum memproses data
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send({
        message: "Error uploading file.",
        error: err
      });
    }

    // Tetapkan harga produk tetap
    const harga_produk = 12000; // Harga per jam

    // Ambil data dari request body
    const { tanggal_penyewaan, tanggal_pengembalian, jumlah_produk, transaksiId } = req.body;

    // Hitung total
    const total = calculateTotal(jumlah_produk, harga_produk);

    // Data detail transaksi
    const data_detail_transaksi = {
      tanggal_penyewaan,
      tanggal_pengembalian,
      harga_produk,
      jumlah_produk,
      total,
      name: req.file ? req.file.originalname : null,
      path: req.file ? req.file.path : null,
      type: req.file ? req.file.mimetype : null,
      transaksiId
    };

    console.log("data_", data_detail_transaksi);

    detail_transaksi.create(data_detail_transaksi)
      .then(data => {
        res.send({
          message: "Data was inserted successfully.",
          data
        });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating data."
        });
      });
  });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await detail_transaksi.update(req.body, { where: { id: id } });
    num[0] === 1 ? res.send({
      message: "Data was updated successfully."
    }) : res.send({
      message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
    });
  } catch (err) {
    res.status(500).send({
      message: `Error updating Data with id=${id}`,
      error: err
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await detail_transaksi.destroy({ where: { id: id } });
    num === 1 ? res.send({
      message: "Data was deleted successfully."
    }) : res.send({
      message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`
    });
  } catch (err) {
    res.status(500).send({
      message: `Error deleting Data with id=${id}`,
      error: err
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const data = await detail_transaksi.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving data.",
      error: err
    });
  }
};

exports.readById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await detail_transaksi.findByPk(id);
    data ? res.send(data) : res.status(404).send({
      message: `Cannot find Data with id=${id}.`
    });
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving Data with id=${id}`,
      error: err
    });
  }
};
