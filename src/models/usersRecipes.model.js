const db = require("../utils/database")
const { DataTypes } = require("sequelize")
const Users = require("./users.model")
const Recipes = require("./recipes.model")
const Ingredients = require("./ingredients.model")

const UsersRecipes = db.define('users_recipes', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      key: 'id',
      model: Users
    }
  },
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'recipe_id',
    references: {
      key: 'id',
      model: Recipes
    }
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})


module.exports = UsersRecipes