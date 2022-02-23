import Joi from 'Joi';

const schema = Joi.object({
    id: Joi.number(),
    taskType: Joi.string()
        .required(),
    locationType: Joi.string()
        .required(),
    location: Joi.array().items(Joi.object({
        lat: Joi.number(),
        lng: Joi.number()
    }))
        .required(),
    executorId: Joi.number()
        .required(),
})
export default schema;