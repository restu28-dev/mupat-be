module.exports = (sequelize, DataTypes) => {

    const transaksi_diantar = sequelize.define("transaksi_diantar", {

          id: {

            autoIncrement: true,

            type: DataTypes.BIGINT,

            allowNull: false,

            primaryKey: true

          },  

         jam_pengantaran: {

            type: DataTypes.STRING(50),

            allowNull: true

          },

          durasi: {

            autoIncrement: false,

            type: DataTypes.TEXT,

            allowNull: false,

            primaryKey: false

          },

          tanggal_sewa : {

            autoIncrement: false,

            type: DataTypes.STRING(50),

            allowNull: false,

            primaryKey: false

          },

           tanggal_pengembalian: {

            autoIncrement: false,

            type: DataTypes.STRING(50),

            allowNull: true,

            primaryKey: false

           },

        total_pembayaran: {

         autoIncrement: false,

         type: DataTypes.STRING(50),

         allowNull: true,

         primaryKey: false

       }, 

       type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },

    }, {

      sequelize,

      tableName: 'transaksi_diantar',

      timestamps: true,

      indexes: [

        {

          name: "PRIMARY",

          unique: true,

          using: "BTREE",

          fields: [

            { name: "id" },

          ]

        },

      ]

    });

  

    return transaksi_diantar;

  }; 