const { Organization } = require('../../models')

const getAll = async (orgID) => {
  try {
    const organization = await Organization.findByPk(orgID)
    return organization
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll }
