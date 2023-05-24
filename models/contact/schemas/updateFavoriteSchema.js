const Joi = require("joi");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

module.exports = {
  updateFavoriteSchema,
};
