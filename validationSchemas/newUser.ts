import joi from "joi";

const newUser = joi.object({
    login: joi.string()
        .min(3)
        .max(30),

    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    firstName:joi.string()
        .min(2)
        .max(30),
    lastName:joi.string()
        .max(30),

})

export default newUser