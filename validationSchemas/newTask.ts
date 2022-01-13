import Joi from 'Joi';
import createNewTask from "../controllers/newTask";

const schema = Joi.object({
    id: Joi.number(),
    taskType: Joi.string()
        .required(),
    locationType: Joi.string()
        .required(),
    location: Joi.string()
        .required(),
    executorId: Joi.array().items(Joi.string())
        .required(),
})
export default schema;