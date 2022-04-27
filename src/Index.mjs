import express, { application } from "express";
import { authorizedMiddleware } from "./middleware/authorization.mjs";
import {postUsersControllers} from "./controllers/UsersControllers.mjs";
import { requestLog } from "./middleware/requestsLog.mjs";
import { deleteTaskController, getTaskController, postTaskController, 
         putTaskController } from "./controllers/tasksControllers.mjs";

// sustituye app por express.get(...) o express.post(...)

const app = express();

// sustituye PORT por 3000

const PORT = 3000;

//  http://Localhost:3000/api/v0.0/tasks

// El url pasa a llamarse Path_Prefix para mayor comodidad.

const PATH_PREFIX = "http://Localhost:3000/api/v0.0/";

// express.json no es necesario en GET 

const jsonParser = (express.json())

app.post (PATH_PREFIX + "/users/", jsonParser, postTaskController);

/** app.post ("/api/v0.0/users/", (request, response)=>{
 *  users.push (request.body);   response.sendStatus (201); })   */

app.get (PATH_PREFIX + "/tasks/",getTaskController);

/**app.get("/api/v0.0/tasks/",(request, response)=>{
    response.json(tasks)})  */

app.post (PATH_PREFIX + "/task/", jsonParser, postTaskController);

/** app.post ("/api/v0.0/task/",(request, response)=>{
    tasks.push(request.body);    response.sendStatus(201); } */

app.put("/api/v0.0/task/", jsonParser, putTaskController)

/** app.put("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;   const oldTaskIdx = tasks.findIndex(     
        item => item.id === updatedTask.id )
    tasks[oldTaskIdx] = updatedTask;    response.sendStatus(200);}) */

app.delete("/api/v0.0/task/",jsonParser, deleteTaskController)

/**  app.delete("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )   tasks.splice(oldTaskIdx,1);     response.sendStatus(200)})*/

app.listen(PORT,()=>{
    console.log("Express running...");
})