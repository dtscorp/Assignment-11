const db = require('../config/database');

class Student {

    static all() {
        return new Promise((resolve, reject)=>{
        const _queries = "SELECT * FROM student";
        db.query(_queries, (err, result)=>{
            resolve(result);
        });
    } );
    
    }
}

module.exports = Student;