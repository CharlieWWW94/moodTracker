import { Model, DataTypes } from "sequelize";
import connection from "../connection";

interface UserMoodAttributes {
  id?: number,
  userId: number,
  moodId: number,
  locationId: number,
  start: Date,
  end: Date,
  createdAt?: Date,
  updatedAt?: Date
}

class UserMood extends Model<UserMoodAttributes> implements UserMoodAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  UserMood.init({
    userId: DataTypes.INTEGER,
    moodId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize: connection,
    modelName: 'UserMood',
  });

