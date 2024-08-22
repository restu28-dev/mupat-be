//mulai kembali dari index models

const dbConfig = require("../config/peserta.db.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

  host: dbConfig.HOST,

  dialect: dbConfig.dialect,

});

// membuat module

const db = {};

// sequelize

db.Sequelize = Sequelize;

db.sequelize = sequelize;

// model

db.peserta = require("./peserta.model")(sequelize, Sequelize);
db.images = require("./image.model")(sequelize, Sequelize);
db.produk = require("./produk.model")(sequelize, Sequelize);
db.transaksi = require("./transaksi.model")(sequelize, Sequelize);
db.kategori = require("./kategori.model")(sequelize, Sequelize);
db.transaksi_diantar = require("./transaksi_diantar.model")(sequelize, Sequelize);
db.transaksi_dijemput= require("./transaksi_dijemput.model")(sequelize, Sequelize);
db.halaman_admin = require("./halaman_admin.model")(sequelize, Sequelize);
db.halaman_daftar = require("./halaman_daftar.model")(sequelize, Sequelize);
db.halaman_masuk = require("./halaman_masuk.model")(sequelize, Sequelize);
db.detail_transaksi = require("./detail_transaksi.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);
module.exports = db;