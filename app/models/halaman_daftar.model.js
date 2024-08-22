module.exports = (sequelize, DataTypes) => {

    const halaman_daftar = sequelize.define("halaman_daftar", {

          id: {

            autoIncrement: true,

            type: DataTypes.BIGINT,

            allowNull: false,

            primaryKey: true

          },  

         password: {

            type: DataTypes.STRING(50),

            allowNull: true

          },

          no_hp: {

            autoIncrement: false,

            type: DataTypes.STRING(50),

            allowNull: false,

            primaryKey: false

          },

          NIK: {

            autoIncrement: false,

            type: DataTypes.STRING(50),

            allowNull: false,

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

      tableName: 'halaman_daftar',

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

  

    return halaman_daftar;

  }; 