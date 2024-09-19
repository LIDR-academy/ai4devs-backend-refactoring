import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/config';

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description?: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(80),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: false,
  }
);

export default Product;