'use strict';

/** @type {import('sequelize-cli').migrations} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Menambahkan atau mengubah kolom sesuai dengan model terbaru
    await queryInterface.addColumn('transaksi', 'nama_pemesan', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('transaksi', 'nama_sepeda', {
      type: Sequelize.STRING(50),
      allowNull: true
    });
    await queryInterface.addColumn('transaksi', 'tanggal_penyewaan', {
      type: Sequelize.DATEONLY,
      allowNull: false
    });
    await queryInterface.addColumn('transaksi', 'tanggal_pengembalian', {
      type: Sequelize.DATEONLY,
      allowNull: true
    });
    await queryInterface.addColumn('transaksi', 'durasi', {
      type: Sequelize.INTEGER, // Durasi dalam jam
      allowNull: false
    });
    await queryInterface.addColumn('transaksi', 'jumlah_produk', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn('transaksi', 'total_harga', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    });
    await queryInterface.addColumn('transaksi', 'metode_pembayaran', {
      type: Sequelize.ENUM('shopeepay', 'brimo', 'ovo', 'gopay', 'dana'),
      allowNull: false
    });

    // Menghapus kolom yang tidak diperlukan jika ada
    await queryInterface.removeColumn('transaksi', 'type'); // Kolom 'type' diganti dengan 'metode_pembayaran'
  },

  down: async (queryInterface, Sequelize) => {
    // Rollback jika diperlukan
    await queryInterface.removeColumn('transaksi', 'nama_pemesan');
    await queryInterface.removeColumn('transaksi', 'nama_sepeda');
    await queryInterface.removeColumn('transaksi', 'tanggal_penyewaan');
    await queryInterface.removeColumn('transaksi', 'tanggal_pengembalian');
    await queryInterface.removeColumn('transaksi', 'durasi');
    await queryInterface.removeColumn('transaksi', 'jumlah_produk');
    await queryInterface.removeColumn('transaksi', 'total_harga');
    await queryInterface.removeColumn('transaksi', 'metode_pembayaran');

    // Mengembalikan kolom jika perlu
    await queryInterface.addColumn('transaksi', 'type', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
