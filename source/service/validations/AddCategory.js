const JOI = require('joi');

const addCategorySchema = JOI.object({
  category: JOI.string().min(2).max(35).required()
    .messages({
      'any.required': 'A categoria é necessário',
      'string.empty': 'A categoria não pode estar vazio',
      'string.min': 'A categoria deve ter no mínimo 2 caracteres',
      'string.max': 'A categoria deve ter no máximo 35 caracteres',
    }),
});

module.exports = (value) => addCategorySchema.validate(value);
