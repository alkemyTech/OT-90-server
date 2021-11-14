const { Organization } = require('../../models')

const getAll = async (orgID) => {
  try {
    const organization = await Organization.findByPk(orgID)
    return organization
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const modifyOrg = async (orgToModify) => {
  try {
    const { id } = orgToModify
    const { name } = orgToModify
    const { image } = orgToModify

    const putOrg = await Organization.findByPk(id)
    putOrg.name = name
    putOrg.image = image
    await putOrg.save()

    return putOrg
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getAll, modifyOrg }
