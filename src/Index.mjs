import express, { application } from "express";
import { authMiddleware } from "./middleware/authorization.mjs";
import {postUsersControllers} from "./controllers/UsersControllers.mjs";
import { requestLog, bodyLog } from "./middleware/requestsLog.mjs";
import { getTaskController, postTaskController, putTaskController, 
         deleteTaskController } from "./controllers/tasksControllers.mjs";

const app = express(); // sustituye app por express.get(...) o express.post(...)

const PORT = 3000;// sustituye PORT por 3000


                        //  http://Localhost:3000/api/v0.0/tasks


// El url pasa a llamarse Path_Prefix para mayor comodidad.

const PATH_PREFIX = "http://Localhost:3000/api/v0.0/";


try {
const jsonParser = (express.json())  // express.json no es necesario en GET 


app.post (PATH_PREFIX + "/users/", authMiddleware, jsonParser, postTaskController);

/** app.post ("/api/v0.0/users/", (request, response)=>{
 *  users.push (request.body);   response.sendStatus (201); })   */

    app.get (PATH_PREFIX+"/tasks/:id", authMiddleware, authMiddleware, getOneTaskController );

/** Ruta obteniendo el parámetro concreto (id). En tasksControllers funcion
    getOneTaskController */
 
    app.get (PATH_PREFIX + "/tasks/",authMiddleware, getTaskController);

/**app.get("/api/v0.0/tasks/",(request, response)=>{
    response.json(tasks)})  */

app.post (PATH_PREFIX + "/task/", authMiddleware, jsonParser, postTaskController);

/** app.post ("/api/v0.0/task/",(request, response)=>{
    tasks.push(request.body);    response.sendStatus(201); } */

app.put("/api/v0.0/task/", authMiddleware, jsonParser, putTaskController)

/** app.put("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;   const oldTaskIdx = tasks.findIndex(     
        item => item.id === updatedTask.id )
    tasks[oldTaskIdx] = updatedTask;    response.sendStatus(200);}) */

app.delete("/api/v0.0/task/", authMiddleware, jsonParser, deleteTaskController)

/**  app.delete("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )   tasks.splice(oldTaskIdx,1);     response.sendStatus(200)})*/

app.listen(PORT,()=>{
    console.log("Express running...");
});

} catch (err) {
    console.error (err);
}