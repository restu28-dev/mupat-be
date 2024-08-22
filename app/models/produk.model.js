module.exports = (sequelize, DataTypes) => {

    const produk = sequelize.define("produk", {

          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },

          nama_produk: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Menjadikan nama produk unik jika diperlukan
        },

          harga: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            get() {
                const rawValue = this.getDataValue('harga');
                return parseFloat(rawValue).toLocaleString('id-ID'); // Memformat harga dalam ribuan
            }
        },



          type: {
            type: DataTypes.STRING,
          },
          name: {
            type: DataTypes.STRING,
          },

          
      },{
        sequelize,

        tableName: 'produk',
  
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
  
    
  
      return produk;
  
    }; 