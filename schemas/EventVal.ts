const Joi = require('joi')

const EventVal = Joi.object({
    priority: Joi.number()?.min(1).max(3).required(),
    time: Joi.date().required(),
    authorId: Joi.number().required(),
    description: Joi.string().required(),
})

export default EventVal