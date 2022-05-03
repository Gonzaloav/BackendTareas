export const userSchema = {
    $id: "/user",
    type: "object",
    properties: {
        name: {
            description: "Nombre único del usuario",
            type: "string"
        },
        password: {
            description: "Contraseña secreta del usuario",
            type: "string"
        },
    },
    additionalProperties: false
}