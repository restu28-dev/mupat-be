// models/detail_transaksi.model.js
module.exports = (sequelize, DataTypes) => {
  const detail_transaksi = sequelize.define("detail_transaksi", {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tanggal_penyewaan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tanggal_pengembalian: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    harga_produk: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    jumlah_produk: {  // <-- Tambahkan kolom jumlah_produk di sini
      type: DataTypes.INTEGER,
      allowNull: false
    },
   total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transaksiId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'transaksi',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'detail_transaksi',
    timestamps: true
  });

  detail_transaksi.associate = (models) => {
    // Many-to-One relationship
    detail_transaksi.belongsTo(models.Transaksi, {
      foreignKey: 'transaksiId',
      as: 'transaksi'
    });
  };

  return detail_transaksi;
};
