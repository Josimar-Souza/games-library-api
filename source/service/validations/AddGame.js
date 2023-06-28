const JOI = require('joi');

const addGameSchema = JOI.object({
  title: JOI.string().min(2).max(50).required()
    .messages({
      'any.required': 'Título é necessário',
      'string.empty': 'Título não pode estar vazio',
      'string.min': 'Título deve ter no mínimo 2 caracteres',
      'string.max': 'Título deve ter no máximo 50 caracteres',
    }),
  sinopse: JOI.string().min(5).max(2000).required()
    .messages({
      'any.required': 'Sinopse é necessária',
      'string.empty': 'Sinopse não pode estar vazio',
      'string.min': 'Sinopse deve ter no mínimo 5 caracteres',
      'string.max': 'Sinopse deve ter no máximo 2000 caracteres',
    }),
  developer: JOI.string().min(2).max(50).required()
    .messages({
      'any.required': 'Desenvolvedora é necessária',
      'string.empty': 'Desenvolvedora não pode estar vazio',
      'string.min': 'Desenvolvedora deve ter no mínimo 2 caracteres',
      'string.max': 'Desenvolvedora deve ter no máximo 50 caracteres',
    }),
  publisher: JOI.string().min(2).max(50).required()
    .messages({
      'any.required': 'Publicadora é necessária',
      'string.empty': 'Publicadora não pode estar vazio',
      'string.min': 'Publicadora deve ter no mínimo 2 caracteres',
      'string.max': 'Publicadora deve ter no máximo 50 caracteres',
    }),
  releaseDate: JOI.string().isoDate().required()
    .messages({
      'any.required': 'Ano de lançamento é necessário',
      'string.empty': 'Ano de lançamento não pode estar vazio',
      'string.length': 'Ano de lançamento deve ter 10 caracteres',
      'string.pattern.base': 'Ano de lançamento deve estar no formato "dd/mm/aaaa"',
      'string.isoDate': 'A data precisa estar no formato iso',
    }),
  platforms: JOI.array().required().items(JOI.string().min(3).required()
    .messages({
      'any.required': 'Plataformas são necessárias',
      'string.empty': 'Plataformas não podem estar vazias',
      'string.min': 'Plataformas devem ter no mínimo 3 caracteres',
    })).messages({
    'any.required': 'Plataformas são necessárias',
  }),
  trailerURL: JOI.string().uri().required()
    .messages({
      'any.required': 'A url do trailer é necessária',
      'string.empty': 'A url do trailer não pode estar vazia',
      'string.uri': 'A url do trailer deve ser um link válido',
    }),
  metacritic: JOI.object({
    metascore: JOI.number().required()
      .messages({
        'any.required': 'A nota do metascore é necessária',
      }),
    userscore: JOI.number().required()
      .messages({
        'any.required': 'A nota do userscore é necessária',
      }),
  }).required()
    .messages({
      'any.required': 'Metacritic é necessário',
    }),
  image: JOI.string().uri().required()
    .messages({
      'any.required': 'A url da imagem é necessária',
      'string.empty': 'A url da imagem não pode estar vazia',
      'string.uri': 'A url da imagem deve ser um link válido',
    }),
  backdrop: JOI.string().uri().required()
    .messages({
      'any.required': 'A url da imagem de backdrop é necessária',
      'string.empty': 'A url da imagem de backdrop não pode estar vazia',
      'string.uri': 'A url da imagem de backdrop deve ser um link válido',
    }),
  category: JOI.string().min(2).max(35).required()
    .messages({
      'any.required': 'A categoria é necessária',
      'string.empty': 'A categoria não pode estar vazia',
      'string.min': 'A categoria deve ter no mínimo 2 caracteres',
      'string.max': 'A categoria deve ter no máximo 35 caracteres',
    }),
});

module.exports = (value) => addGameSchema.validate(value);
