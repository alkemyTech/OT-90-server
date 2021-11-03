const store = require('./store')

const getAll = async (orgID) => {
  try {
    const organization = await store.getAll(orgID)
    const response = {
      id: organization.id,
      name: organization.name,
      image: organization.image,
      phone: organization.phone,
      address: organization.address,
      welcomeText: organization.welcomeText,
      urlFacebook: organization.urlFacebook,
      urlLinkedin: organization.urlLinkedin,
      urlInstagram: organization.urlInstagram
    }
    return response
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll }
