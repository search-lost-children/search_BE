const Joi = require('joi')


const usersValidationSchema = Joi.object({
    login: Joi.string().alphanum().required(),
    password: Joi.string().alphanum().required()
})

export default usersValidationSchema