import { users } from "../models/usersModels.mjs";

/**  .split = didive un objeto tipo string en un array de cadenas mediante la 
              separación de la cadena en subcadenas. */

function decodeAuthBasic (headerContent) {
    try {
        const [method, token ] = headerContent.split (" ");
        const tokenString = atob (token);
        const [ username, password ] = tokenString.split(":");
        return { method, username, password }
    } catch (error) {
        throw "Autenticación mal formada";
    }  
}

/** .find = Devuelve el valor del primer elemento del array que cumple la función de 
            prueba proporcionada. 
 * .throw = Define un error personalizado. Yo marco el error.*/

export function authMiddleware (request, response, next) {
    try{

        const {method, username, password } = 
        decodeAuthBasic (request.headers.authorization); 

        if (method != "Basic") throw 
        "Método de autorización no válido. Use Básico en su lugar.";

        const user = users.find (
            item => item.name === username && item.password === password
        );      

        if (user ) {
            next ()
        }   else {
            throw "Error en la autorización."
        }

    } catch (err) {
        console.error (err);
        response.sendStatus (401);
        return; 
    }
}

/**export function authorizedMiddleware( request, response, next ){
    if ( request.headers.authorized === true ) {
        next()   }  else {   response.sendStatus(401)    }} */

