import { users } from "../models/usersModels.mjs";

export function getUsersController (request, response) {
         response.json(tasks).send ('Hola Mundo');
}

export function postUsersController (request, response) {
    users.push (request.body);
    response.sendStatus (201).send ('Hola Mundo'); 
}