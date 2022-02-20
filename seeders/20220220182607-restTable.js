'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example: */
      await queryInterface.bulkInsert('restaurantModels', [{
        "restaurant_id": "3178ea27-d6d3-664a-9612-9b4fd228a793",
        "restaurant_name": "Food stack",
        "address": "Mumbai",
        "vegOnly": false,
        "cost": "medium",
        "cuisineTypes": [
            "Chinese",
            "Mexican"
        ],
        "createdAt": "2022-02-21T17:42:17.004Z",
        "updatedAt": "2022-02-21T17:42:17.004Z"
    }], {});
      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('restaurantModels', {});
  }
};
