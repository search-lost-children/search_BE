import Joi from 'Joi';

const schema = Joi.object({
    id: Joi.number(),
    taskType: Joi.string()
        .required(),
    locationType: Joi.string()
        .required(),
    location: Joi.array().items(Joi.string())
        .required(),
    executorId: Joi.string()
        .required(),
})
export default schema;