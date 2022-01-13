const Joi = require('joi')


const idValidationSchema = Joi.object({
    id: Joi.string().alphanum().required(),
})

export default idValidationSchema