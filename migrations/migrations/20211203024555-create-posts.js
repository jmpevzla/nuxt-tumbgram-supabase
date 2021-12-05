'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { 
          model: { 
            //schema: 'public',
            tableName: 'profiles'
          },
          key: 'id' 
        }
      },
      image_url: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
        defaultValue: ''
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};
