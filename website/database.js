const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/poetry.db', (err) => {  //note to self, it can't create new directories
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the poetry database.');
    }
});


//close the databse connection
db.close((err) =>{
    if (err){
        return console.error(err.message);
    }
    console.log("Closed the databse connection.");
});