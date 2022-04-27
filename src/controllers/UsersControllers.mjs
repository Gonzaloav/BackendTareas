import { users } from "../models/usersModels.mjs";

export function getTaskController (request, response) {
         response.json(tasks)
}

export function postTaskController (request, response) {
    users.push (request.body);
    response.sendStatus (201); 
}