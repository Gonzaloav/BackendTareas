import { tasks } from "../models/tasksModels.mjs"


/**  req o request = Recibo respuesta;    Res o response = Recibo respesta. 
* SendStatus = Establece el estado y lo envía a la cliente. 
* Cuando recibo la respuesta requerida.
* try =  define un bloque de código para ejecutar (para probar.)
* Catch = Define un bloque de código para manejar cualquier error. */

export function getTaskController (request, response) {
    try{
         response.json(tasks).send ('Hola Mundo');
    } catch (err) {
        console.error(err);
        response.sendStatus (500).send ('Error del servidor');
    }
}


export function postTaskController (request, response) {
    try {
            tasks.push(request.body);
            response.sendStatus(201).send ('Hola Mundo');
    } catch (err) {
            console.error(err);
            response.sendStatus (500).send ('Error del servidor'); 
    }
} 


/**  findIndex = Devuelve el índice del primer elemento de un array que cumpla 
 * con la función de prueba proporcionada. En caso contrario devuelve -1.*/

export function putTaskController (request, response) {
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks[oldTaskIdx] = updatedTask;
    response.sendStatus(200).send ('Hola Mundo');
}

export function deleteTaskController (request, response) {
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200).send ('Hola Mundo');
}