import { Model, DataTypes }from 'sequelize'

export class Member extends Model {}

export default (sequelize) => {
  Member.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fileId: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      passwordSalt: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      providerKey: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      providerType: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      version: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      withdraw: {
        type: DataTypes.CHAR(1),
        allowNull: false
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updateDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'member',
      createdAt: 'createDate',
      updatedAt: 'updateDate',
      sequelize
    }
  )

  return Member
}
