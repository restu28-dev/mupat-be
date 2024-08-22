const fs = require("fs");
const path = require("path");
const multer = require("multer");
const db = require('../models');
const halaman_masuk = db.halaman_masuk; // Pastikan nama model benar

const uploadDir = 'resource/static/assets/uploads';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'resource/static/assets/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan timestamp untuk nama file unik
  }
});

const upload = multer({ storage: storage }).single('file');

exports.create = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send({
        message: "Error uploading file.",
        error: err
      });

    }
    const data_halaman_masuk = {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
    };

    console.log("data_",data_halaman_masuk)
    
    halaman_masuk.create({
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
    })
    .then(data => {
      res.send({
        message: "Data was inserted successfully."
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
    const num = await halaman_masuk.update(req.body, { where: { id: id } });
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
    const num = await halaman_masuk.destroy({ where: { id: id } });
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
    const data = await halaman_masuk.findAll();
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
    const data = await halaman_masuk.findByPk(id);
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


      