'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [{
      name: 'Table',
      description: 'This is a table',
      price: 100,
      image: 'https://cdn.greenmagazine.com.au/wp-content/uploads/2016/07/21180024/TPC_table_ctp_1-800x600.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: 1
    }, {
      name: 'Chair',
      description: 'This is a chair',
      price: 50,
      image: 'https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk=',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: 1
    }, {
      name: 'Shirt',
      description: 'This is a shirt',
      price: 20,
      image: 'https://www.collinsdictionary.com/images/full/shirt_378037390_1000.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: 2
    }, {
      name: 'Pant',
      description: 'This is a Pant',
      price: 30,
      image: 'https://cdn.shopify.com/s/files/1/2520/7832/products/stone-harbor-men-s-cotton-pant-charcoal-w-30-men-s-stone-harbor-charcoal-stretchy-narrow-cotton-pant-30061730431029_5000x.jpg?v=1629704621',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: 2
    }]
    return queryInterface.bulkInsert('products', data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
