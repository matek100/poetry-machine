const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/poetry.db', (err) => {  //note to self, it can't create new directories
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the poetry database.');
        db.run(`CREATE TABLE poems (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author text,
            poem text
            )`, (err) => {
                if(err){
                    console.log("Table already created");
                }else{
                    var insert = "INSERT INTO poems (author, poem) VALUES (?, ?)"
                    db.run(insert, ["Loren", "Lorem Impsum Cardiganus"]);
                    db.run(insert, ["Ipsumanum", "Kavalirus, novarius, manarius"]);
                }

            });

    }
});




module.exports = db;