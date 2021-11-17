const { User } = require('../models')

const hardDelete = async (id) => {
  try {
    await User.destroy({
      where: { id },
      force: true
    })
    return true
  } catch (e) {
    return false
  }
}

module.exports = { hardDelete }
