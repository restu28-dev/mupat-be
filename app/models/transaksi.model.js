// models/transaksi.model.js
module.exports = (sequelize, DataTypes) => {
  const transaksi = sequelize.define("transaksi", {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nama_pemesan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama_sepeda: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tanggal_penyewaan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tanggal_pengembalian: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    durasi: {
      type: DataTypes.INTEGER, // Durasi dalam jam
      allowNull: false,
      get() {
        // Getter untuk menampilkan durasi dengan label "jam"
        const rawValue = this.getDataValue('durasi');
        return `${rawValue} jam`;
      }
    },
    jumlah_produk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    metode_pembayaran: {
      type: DataTypes.ENUM('shopeepay', 'brimo', 'ovo', 'gopay', 'dana'),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaksi',
    timestamps: true
  });

  transaksi.associate = (models) => {
    // One-to-Many relationship
    transaksi.hasMany(models.detail_transaksi, {
      foreignKey: 'transaksiId',
      as: 'detail_transaksi'
    });
  };

  return transaksi;
};
