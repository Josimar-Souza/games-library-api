const JOI = require('joi');

const addCategorySchema = JOI.object({
  name: JOI.string().min(2).max(35).required()
    .messages({
      'any.required': 'O nome da categoria é necessário',
      'string.empty': 'O nome não pode estar vazio',
      'string.min': 'O nome deve ter no mínimo 2 caracteres',
      'string.max': 'O nome deve ter no máximo 35 caracteres',
    }),
});

module.exports = (value) => addCategorySchema.validate(value);
