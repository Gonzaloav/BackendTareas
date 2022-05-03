import express from "express";
import { authMiddleware } from "./middleware/authorization.mjs";
import { postUserController } from "./controllers/UsersControllers.mjs";
import { requestLog } from "./middleware/requestsLog.mjs";
import { getTaskController, postTaskController, putTaskController, 
         deleteTaskController } from "./controllers/tasksControllers.mjs";
import { validateUserJSON, validateNewTaskJSON, validateTaskJSON, 
       validateDeleteTaskJSON } from "./middleware/jsonValidator.mjs";

const app = express(); // sustituye app por express.get(...) o express.post(...)

const PORT = 3000;// sustituye PORT por 3000


                        //  http://Localhost:3000/api/v0.0/tasks


// El url pasa a llamarse Path_Prefix para mayor comodidad.

const PATH_PREFIX = "http://Localhost:3000/api/v0.0/";


try {
const jsonParser = (express.json())  // express.json no es necesario en GET 

app.use (requestLog);

/** app.post ("/api/v0.0/users/", (request, response)=>{
 *  users.push (request.body);   response.sendStatus (201); })   */

app.post (PATH_PREFIX + "/users/", authMiddleware, jsonParser, validateUserJSON, postUserController);

/**app.get("/api/v0.0/tasks/",(request, response)=>{
    response.json(tasks)})  */

app.get (PATH_PREFIX + "/tasks/",authMiddleware, getTaskController);


/** app.post ("/api/v0.0/task/",(request, response)=>{
    tasks.push(request.body);    response.sendStatus(201); } */

app.post (PATH_PREFIX + "/task/", authMiddleware, jsonParser, validateNewTaskJSON, postTaskController);

/** app.put("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;   const oldTaskIdx = tasks.findIndex(     
        item => item.id === updatedTask.id )
    tasks[oldTaskIdx] = updatedTask;    response.sendStatus(200);}) */

app.put("/api/v0.0/task/", authMiddleware, jsonParser, validateTaskJSON, putTaskController)

/**  app.delete("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )   tasks.splice(oldTaskIdx,1);     response.sendStatus(200)})*/

app.delete("/api/v0.0/task/", authMiddleware, jsonParser, validateDeleteTaskJSON, deleteTaskController)



app.listen(PORT,()=>{
    console.log("Express funcionando...");
});

} catch (err) {
    console.error (err);
}

/** Ruta obteniendo el parámetro concreto (id). En tasksControllers funcion
    getOneTaskController 
    app.get (PATH_PREFIX+"/tasks/:id", authMiddleware, authMiddleware, getOneTaskController );*/