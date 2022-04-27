import { users } from "../models/usersModels.mjs";

export function getTaskController (request, response) {
         response.json(tasks).send ('Hola Mundo');
}

export function postTaskController (request, response) {
    users.push (request.body);
    response.sendStatus (201).send ('Hola Mundo'); 
}