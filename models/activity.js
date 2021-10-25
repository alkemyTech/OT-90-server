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
            type: dataTypes.STRING
            },
            deleteAt: {
            type: dataTypes.DATE,
            allowNull: true
            } 
        }
    let config = {
        timestamps: true
    }
    const Activity = sequelize.define(alias, cols, config)
  
    return Activity
  }