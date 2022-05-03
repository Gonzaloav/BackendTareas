import { tasks } from "../models/tasksModels.mjs"
import { db} from "../backend/db.mjs"

/** Para Unificar la base de datos. 
 *  req o request = Recibo respuesta;    Res o response = Recibo respesta. 
*   SendStatus = Establece el estado y lo envía a la cliente. 
                 Cuando recibo la respuesta requerida. */

export function getAllTaskscontroller (request, response) {
    db.all(
        'SELECT id, description, done FROM tasks',
       (err, data) => {
           if ( err ) {
               console.error (err);
               response.sendStatus (500).send ('Error del servidor');
           } else {
               response.json (data);
           }
       } 
    )    
}

/**export function getAllTaskController (request, response) {
    try{    response.json(tasks).send ('Hola Mundo');
    } catch (err) {      console.error(err);
        response.sendStatus (500).send ('Error del servidor');   }   } */

/** Para unificar la base de datos. */

export function postTaskController (request, response) {
    const { description, done } = request.body;
    db.run (
        `INSERT INTO tasks (description, done) VALUES ("${description}", ${done})`,
        (err) => {
            if (err) {
                console.error (err);
                response.sendStatus (500).send ('Error del servidor');
            } else {
                response.sendStatus (201).send ('Hola Mundo');
            }
        }
    )   
}

    /** El id no lo tenemos. Lo creamos en el momento ( id: Date.now) 

export function postTaskController (request, response) {
    try {    tasks.push({...request.body, id: Date.now()});
            response.sendStatus(201).send ('Hola Mundo');
    } catch (err) {         console.error(err);
            response.sendStatus (500).send ('Error del servidor');  }       } */

export function getTaskController(request, response) {
    response.json (tasks)
}

/** try =  define un bloque de código para ejecutar (para probar.)
*   Catch = Define un bloque de código para manejar cualquier error. 
*   .find = Devuelve el valor del primer elemento del array que cumple la función 
          de prueba proporcionada. 
*   parseInt = Convierte un argumento de tipo cadena y devuelve un entero de la 
             base especificada.

export function getOneTaskController(request, response) {
    try {        const task = tasks.find (
          item => item.id === parseInt (request.params.id)   )
        if ( task ) response.json (task)         else response.sendStatus (404);
    } catch (err) {      response.sendStatus (400);       }       }*

/** findIndex = Devuelve el índice del primer elemento de un array que cumpla  con 
              la función de prueba proporcionada. En caso contrario devuelve -1.*/

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








