const express = require("express")
const app = express()
const dbConnection = require("./Config/database");
const PORT = 4500;


app.get("/",(req,res) => {
    res.send("Home Page")
})

app.listen(PORT, async() => {
    try {
        await dbConnection
        console.log("Connected To Database")
        console.log("Port is running")
    } catch (error) {
        console.log(`error: ${error}`)
        console.log("Not Connected To Database")
    }
})

