import { Model, DataTypes } from "sequelize";
import connection from "../connection";

interface MoodAttributes {
  id?: number,
  name: string,
  createdAt?: Date,
  updatedAt?: Date
}

class Mood extends Model<MoodAttributes> implements MoodAttributes {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Mood.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.NUMBER
  },
  name: DataTypes.STRING
}, {
  sequelize: connection,
  modelName: 'Mood',
});

export default Mood;

