'use strict';
const {Model,Sequelize} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurantModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  restaurantModel.init({
    restaurant_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false
      },
    vegOnly:{ 
      type: DataTypes.BOOLEAN,
      allownull: false
    },
    cost: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuisineTypes:{
      type: Sequelize.ARRAY(DataTypes.STRING)
    }
  }, {
    sequelize,
    modelName: 'restaurantModel',
  });
  return restaurantModel;
};