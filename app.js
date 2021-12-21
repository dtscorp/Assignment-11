const express = require("express");
// const { listen } = require("express/lib/application");
const app = express()
const router = require("./routes/api");

app.use(express.json())
app.use(express.urlencoded())
app.use(router);

app.listen(3000, function(){
    console.log("listening to localhost:3000")
})
