module.exports = (sequelize, DataTypes) => {

    const halaman_admin = sequelize.define("halaman_admin", {

          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  

         password: {
            type: DataTypes.STRING(50),
            allowNull: true,
            primaryKey: true
          },

          email: {
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
          data: {
            type: DataTypes.BLOB("long"),
          },
      },{
        sequelize,

        tableName: 'halaman_admin',
  
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
  
    
  
      return halaman_admin;
  
    }; 