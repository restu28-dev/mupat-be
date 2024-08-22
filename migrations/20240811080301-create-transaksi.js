// migrations/xxxx-create-transaksi.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Ubah urutan kolom jika diperlukan
    await queryInterface.renameColumn('transaksi', 'nama_pemesan', 'nama_pemesan');
    await queryInterface.renameColumn('transaksi', 'nama_sepeda', 'nama_sepeda');
    await queryInterface.renameColumn('transaksi', 'tanggal_penyewaan', 'tanggal_penyewaan');
    await queryInterface.renameColumn('transaksi', 'tanggal_pengembalian', 'tanggal_pengembalian');
    await queryInterface.renameColumn('transaksi', 'durasi', 'durasi');
    await queryInterface.renameColumn('transaksi', 'jumlah_produk', 'jumlah_produk');
    await queryInterface.renameColumn('transaksi', 'type', 'metode_pembayaran');
  },

  down: async (queryInterface, Sequelize) => {
    // Rollback jika diperlukan
    await queryInterface.renameColumn('transaksi', 'nama_pemesan', 'nama_pemesan');
    await queryInterface.renameColumn('transaksi', 'nama_sepeda', 'nama_sepeda');
    await queryInterface.renameColumn('transaksi', 'tanggal_penyewaan', 'tanggal_sewa');
    await queryInterface.renameColumn('transaksi', 'tanggal_pengembalian', 'tanggal_pengembalian');
    await queryInterface.renameColumn('transaksi', 'durasi', 'durasi');
    await queryInterface.renameColumn('transaksi', 'jumlah_produk', 'jumlah_produk');
    await queryInterface.renameColumn('transaksi', 'metode_pembayaran', 'type');
  }
};

