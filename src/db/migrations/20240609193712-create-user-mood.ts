import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
    await queryInterface.createTable('UserMoods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          tableName: "Users"
        }
      },
      moodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          tableName: "Moods"
        }
      },
      locationId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          tableName: "Locations"
        }
      },
      start: {
        allowNull: true,
        type: Sequelize.DATE
      },
      end: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface, _Sequelize:any) {
    await queryInterface.dropTable('UserMoods');
  }
};
