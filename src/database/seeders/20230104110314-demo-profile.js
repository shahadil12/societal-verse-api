"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Profiles", [
      {
        id: "8d8bc566-6a75-4f36-914e-6d4cfec8477b",
        userId: "8d8bc566-6a75-4f36-914e-6d4cfec8466b",
        firstName: "adil",
        lastName: "shah",
        dateOfBirth: new Date(2003),
        bio: "Im fine",
        private: false,
        profilePicture:
          "https://images.unsplash.com/photo-1672475917484-436566002a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        storyProfilePicture:
          "https://images.unsplash.com/photo-1672475917484-436566002a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        thumbnailProfilePicture:
          "https://images.unsplash.com/photo-1672475917484-436566002a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete("Profiles", null, {});
  },
};
