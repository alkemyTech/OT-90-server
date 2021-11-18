const db = require('../models')

const hardDelete = async (model, id) => {
  try {
    await db.sequelize.models[model].destroy({
      where: { id },
      force: true
    })
    return true
  } catch (e) {
    return false
  }
}

module.exports = { hardDelete }
