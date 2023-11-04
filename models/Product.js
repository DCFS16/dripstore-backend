const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/sequilize");
const { Category } = require('../models/Category');
const { Product_Category } = require('../models/relations/Product_Category');


const Product = sequelize.define('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false
  },
}, {
  timestamps: false
}, {
  tableName: 'products'
});

Product.belongsToMany(Category, {
  through: {
    model: Product_Category
  },
  foreignKey: 'products_id',
  constraints: true
});

Category.belongsToMany(Product, {
  through: {
    model: Product_Category
  },
  foreignKey: 'categories_id',
  constraints: true
});


module.exports = {
  Product,
}
