import { validate } from "jsonschema";
import { userSchema } from "../schemas/usersSchemas.mjs";
import { taskSchema, newTaskSchema, deleteTaskSchema } from "../schemas/tasksSchemas.mjs";


/** .valid = Es un true o un false. */

export function validateUserJSON ( request, response, next) {
    try {
        const validation = validate( request.body, userSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Datos de usuario proporcionados no válidos.");
            console.error("Datos de usuario proporcionados no válidos.");
        }
    } catch (err) {
        throw "Error al validar los datos."
    }
}

export function validateNewTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, newTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Datos de tareas proporcionados no válidos.");
            console.error("Datos de tareas proporcionados no válidos.");
        }
    } catch (err) {
        throw "Error al validar los datos."
    }
}

export function validateTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, taskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Datos de tareas proporcionados no válidos.");
            console.error("Datos de tareas proporcionados no válidos.");
        }
    } catch (err) {
        throw "Error al validar los datos."
    }
}

export function validateDeleteTaskJSON ( request, response, next) {
    try {
        const validation = validate(request.body, deleteTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Datos de tareas proporcionados no válidos.");
            console.error("Datos de tareas proporcionados no válidos.");
        }
    } catch (err) {
        throw "Error al validar los datos."
    }
}

/* export function validatorFactory (schema) {
    return function JSONvalidator ( request, response, next) {
        try {    const validation = validate(request.body, schema)
            if (validation.valid) {  next();
            } else {    response.status(400);
                         response.send("Invalid task data provided");
                console.error("Invalid task data provided");
            }   } catch (err) {     throw "Error validating data"    }    }   }
const validadorNewTask = validatorFactory(newTaskSchema) */

