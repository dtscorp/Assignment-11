const mysql = require("mysql")

const db = mysql.createConnection
({
    host: "localhost",
    user: "root",
    password: "",
    database:"student_express"
})

db.connect((err)=>{
    if (err){
        console.log(`db connection failed error: ${err.stack}`);
    }else{
        console.log(`db connection success`);
    }
})

module.exports = db;