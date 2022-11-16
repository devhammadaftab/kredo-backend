'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [{
      name: 'Furniture',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cloths',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('categories', data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
