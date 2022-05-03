import { users } from "../models/usersModels.mjs";

export function postUserController (request, response) {
    users.push (request.body);
    response.sendStatus (201).send ('Hola Mundo'); 
}