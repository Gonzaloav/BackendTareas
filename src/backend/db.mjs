import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) {
        throw err.message;
    }
    console.log('Conencta el proyecto de tareas con la base de datos');
});

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        users(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            password TEXT NOT NULL
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
       tasks (
            id INTEGER PRIMARY KEY,
            description VARCHAR NOT NULL,
            done BOOLEAN NOT NULL,
            FOREIGN KEY ( id_user )
                REFERENCES users (id) 
                    ON DELETE CASCADE 
                    ON UPDATE NO ACTION
        )
`);

export function sqlCallback (error, data) {
    console.log("error:", error, "data:", data);
    if ( error ) throw error;
}

export function findUser ( name, password, callback ) {
    db.get(`
        SELECT id
        FROM users
        WHERE name = "${name}" AND password = "${password}"
        `,
        callback
    )
}

export function findSource ( source, password, callback ) {
    db.get(`
        SELECT id
        FROM users
        WHERE id = "${source}" AND password = "${password}"
        `,
        callback
    )
}

export function insertUser ( userObject, callback ) {
    const { id, name, password } = userObject;
    const sql = `
        INSERT INTO users (id, name, password)
        values (${id}, "${name}", "${password}");
    `;
    db.run(sql,callback);
}

export function getUsers ( callback ) {
    db.all("SELECT id, name FROM users", callback);
}

export function insertMessage ( messageObject, callback) {
    const {id, descrption, done } = messageObject;
    const sql = `
        INSERT INTO messages (id, description, done)
        values (${id}, ${descrption}, "${done}");
    `;
    db.run(sql,callback);
}

export function getLastMessages (minutes, callback) {
    const afterTime = Date.now() - 60000 * minutes;
    db.all(`
        SELECT *
        FROM tasks
        WHERE time >= ${afterTime}
        `,
        callback
    )
}


export default db;