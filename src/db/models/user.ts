import { Model, DataTypes } from "sequelize";
import connection from "../connection";

interface UserAttributes {
  id?: number,
  oauthId: string,
  createdAt?: Date,
  updatedAt?: Date
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public oauthId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.NUMBER
  },
  oauthId: DataTypes.STRING
}, {
    sequelize: connection,
    modelName: 'User',
});
