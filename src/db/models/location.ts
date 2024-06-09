import { Model, DataTypes } from "sequelize";
import connection from "../connection";

interface LocationAttributes {
  id?: number,
  latitude: number,
  longitude: number,
  name?: string,
  createdAt?: Date,
  updatedAt?: Date
}

class Location extends Model<LocationAttributes> implements LocationAttributes{

  public id!: number;
  public latitude!: number;
  public longitude!: number;
  public name?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
  Location.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER
    },
    latitude:  {
      allowNull: false,
      type: DataTypes.FLOAT },
    longitude: {
      allowNull: false,
      type: DataTypes.FLOAT },
    name: DataTypes.STRING
  }, {
    sequelize: connection,
    modelName: 'Location',
  });

  export default Location;
