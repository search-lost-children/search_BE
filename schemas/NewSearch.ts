const Joi = require('joi')

const newSearchValidation = Joi.alternatives().try({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        date: Joi.date().required(),
        coordinates:{
            latitude: Joi.number().required(),
            longitude: Joi.number().required()
        },
        address: Joi.string().optional(),
        info: Joi.string().required(),
        photo: Joi.string().required()
    },
    {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        date: Joi.date().required(),
        coordinates: Joi.object({
            latitude: Joi.number().optional(),
            longitude: Joi.number().optional()
        }).optional(),
        address: Joi.string().required(),
        info: Joi.string().required(),
        photo: Joi.string().required()
    }
)

export default newSearchValidation