const JOI = require('joi');

const addCategorySchema = JOI.object({
  name: JOI.string().min(2).max(35).required(),
});

module.exports = (value) => addCategorySchema.validate(value);
