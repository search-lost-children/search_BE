const Joi = require('joi')


const tableSchema = Joi.object({
    id: Joi.number(),
    firstName: Joi.string(),
    lastName: Joi.string(),
})

export default tableSchema