module.exports = (sequelize, dataTypes) => {
    let alias = 'Activity'
    let cols = {
            id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
            },
            name: {
            type: dataTypes.STRING(200)
            },
            content: {
            type: dataTypes.STRING
            },
            image: {
            type: dataTypes.STRING,
            allowNull: true
            },
            deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
            },
            createdAt: {
            allowNull: false,
            type: dataTypes.DATE
            },
            updatedAt: {
            allowNull: false,
            type: dataTypes.DATE
            }
        }
    let config = {
        timestamps: true,
        paranoid: true
    }
    const Activity = sequelize.define(alias, cols, config)
  
    return Activity
  }
  