const { celebrate, Joi, Segments } = require('celebrate');

const productValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(3).max(200).required(),
    description: Joi.string().min(2).max(500).optional().allow(null, ''),
    category: Joi.string().min(3).max(10).required(),
    available: Joi.boolean().required(),
    price: Joi.number().required(),
  })
});

module.exports = productValidator;