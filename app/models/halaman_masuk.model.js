module.exports = (sequelize, DataTypes) => {

    const halaman_masuk = sequelize.define("halaman_masuk", {

          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         username: {
            type: DataTypes.STRING(50),
            allowNull: true,
            primaryKey: true
          },

          password: {
            type: DataTypes.TEXT,
            allowNull: false,
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

        tableName: 'halaman_masuk',
  
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
  
    
  
      return halaman_masuk;
  
    }; 