import express from "express";
import { authorizedMiddleware } from "./middleware/authorization.mjs";
import { deleteTaskController, getTaskController, postTaskController, 
         putTaskController } from "./controllers/tasksControllers.mjs";
const app = express();
const PORT = 3000;

//  http://Localhost:3000/api/v0.0/tasks

app.use(express.json())

app.get("/api/v0.0/tasks/",getTaskController);

/**app.get("/api/v0.0/tasks/",(request, response)=>{
    response.json(tasks)})  */

app.post("/api/v0.0/task/",postTaskController)

/** app.post ("/api/v0.0/task/",(request, response)=>{
    tasks.push(request.body);    response.sendStatus(201); } */

app.put("/api/v0.0/task/",putTaskController)

/** app.put("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;   const oldTaskIdx = tasks.findIndex(     
        item => item.id === updatedTask.id )
    tasks[oldTaskIdx] = updatedTask;    response.sendStatus(200);}) */

app.delete("/api/v0.0/task/",deleteTaskController)

/**  app.delete("/api/v0.0/task/",(request, response)=>{
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )   tasks.splice(oldTaskIdx,1);     response.sendStatus(200)})*/

app.listen(PORT,()=>{
    console.log("Express running...");
})