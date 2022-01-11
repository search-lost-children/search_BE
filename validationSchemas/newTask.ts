import Joi from 'Joi';
import createNewTask from "../controllers/newTask";

const schema = Joi.object({
    id: Joi.number(),
    searchResource: Joi.string()
        .required(),
    searchAddress: Joi.string()
        .required(),
})
export default schema;