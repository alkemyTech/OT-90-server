'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [{
      id: 1,
      name: "Lila",
      phone: "814-530-8463",
      email: "ldarrell0@scientificamerican.com",
      message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 2,
      name: "Nikolia",
      phone: "567-888-4958",
      email: "nbogey1@cisco.com",
      message: "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 3,
      name: "Miquela",
      phone: "362-146-6147",
      email: "mdublin2@wordpress.com",
      message: "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 4,
      name: "Rena",
      phone: "437-251-7185",
      email: "rshallcroff3@hp.com",
      message: "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 5,
      name: "Constantia",
      phone: "894-230-7368",
      email: "cbaily4@artisteer.com",
      message: "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 6,
      name: "Griffy",
      phone: "515-398-7953",
      email: "gmoberley5@dmoz.org",
      message: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 7,
      name: "Celeste",
      phone: "743-435-8832",
      email: "cmatyushenko6@shinystat.com",
      message: "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 8,
      name: "Augy",
      phone: "510-117-8844",
      email: "afinnan7@guardian.co.uk",
      message: "In congue.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 9,
      name: "Hyacintha",
      phone: "776-263-5397",
      email: "hpirelli8@sina.com.cn",
      message: "In eleifend quam a odio. In hac habitasse platea dictumst.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }, {
      id: 10,
      name: "Giovanna",
      phone: "653-518-9071",
      email: "goliveti9@blogtalkradio.com",
      message: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      createdAt: new Date,
      updatedAt: null,
      deletedAt: null
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {})
  }
};
