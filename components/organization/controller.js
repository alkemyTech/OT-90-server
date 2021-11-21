const store = require('./store')

const response = { success: true, body: null }

const getAll = async (orgID) => {
  try {
    const organization = await store.getAll(orgID)
    if (!organization) {
      response.success = false
      response.body = { Error: 'Id not found' }
      return response
    }
    const body = {
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
    response.success = true
    response.body = body
    return response
  } catch ({ message }) {
    response.success = false
    response.body = { Error: message }
    throw response
  }
}

const modifyOrg = async (id, reqBody) => {
  try {
    const { name, image } = reqBody
    response.success = true
    response.body = await store.modifyOrg({
      id, name, image
    })
    if (!response.body) {
      response.success = false
      response.body = { Error: 'Id not found' }
    }
    return response
  } catch (error) {
    response.success = false
    response.body = { error: error.message }
    throw response
  }
}

module.exports = { getAll, modifyOrg }
