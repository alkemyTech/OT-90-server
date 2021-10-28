const { Organization } = require('../../models')

const getAll = async (orgID) => {
  try {
    const organization = await Organization.findOne({ where: { id: orgID } })
    return organization
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll }
