module.exports = (sequelize, DataTypes) => {

    const transaksi_dijemput = sequelize.define("transaksi_dijemput", {

          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         jam_pengambilan: {
            type: DataTypes.STRING(50),
            allowNull: true,
            primaryKey: true
          },

          lokasi: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },

          no_hp: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },

           total_pembayaran: {
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

      },{
        sequelize,

        tableName: 'transaksi_dijemput',
  
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
  
    
  
      return transaksi_dijemput;
  
    }; 