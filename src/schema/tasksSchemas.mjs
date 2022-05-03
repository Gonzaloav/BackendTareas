
/** Atributo = No se aceptan más propiedades a mayores "additionalProperties: false"
    Lo básico es = type: "object", Si es un objeto debe llevar una descripción con
    type:"string" y un done: "boolean"*/

// Para crear una tarea nueva
export const newTaskSchema = {
    $id: "/newTask",
    type: "object",
    properties: {
        description: {
            description: "Descripción para la tarea",
            type: "string"
        },
        done: {
            description: "Estado de la tarea",
            type: "boolean"
        }
    },
    additionalProperties: false
}

// Para modificar una tarea
export const taskSchema = {
    $id: "/task",
    type: "object",
    properties: {
        id: {
            description: "Identificador único de la tarea",
            type: "integer",
            minimum: 0
        },
        description: {
            description: "Descripción de la tarea",
            type: "string"
        },
        done: {
            description: "Estado de la tarea",
            type: "boolean"
        },
    },
    additionalProperties: false
}

// Para eliminar una tarea
export const deleteTaskSchema = {
    $id: "/deleteTask",
    type: "object",
    properties: {
        id: {
            description: "Identificador único de la tarea",
            type: "integer", 
            minimum: 0
        }
    },
    additionalProperties: false
}

