import { tasks } from "../models/tasksModels.mjs"


// req o request = Recibo respuesta;    Res o response = Recibo respesta. 

export function getTaskController (request, response) {
    response.json(tasks)
}

// sendStatus = cuando recibo la respuesta requerida.

export function postTaskController (request, response) {
    tasks.push(request.body);
    response.sendStatus(201);
}

/**  findIndex = Devuelve el índice del primer elemento de un array que cumpla 
 * con la función de prueba proporcionada. En caso contrario devuelve -1.*/

export function putTaskController (request, response) {
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks[oldTaskIdx] = updatedTask;
    response.sendStatus(200);
}

export function deleteTaskController (request, response) {
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200)
}