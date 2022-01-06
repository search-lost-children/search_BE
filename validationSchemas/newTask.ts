import Joi from 'Joi';
import createNewTask from "../controllers/newTask";

const schema = Joi.object({
    id: Joi.number(),
    searchResource: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .required(),
    searchAddress: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .required(),
})
export default schema;