import joi from "joi";

const newUser = joi.object({
    login: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    password: joi.string()
        .min(3)
        .max(30),
    firstName:joi.string()
        .min(2)
        .max(30),
    lastName:joi.string()
        .optional()
        .max(30),
    phoneNumber:joi.string()
        .pattern(new RegExp('^[0][0-9]{9}$')),

})

export default newUser