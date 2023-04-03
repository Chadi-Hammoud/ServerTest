//create an express app
const express = require("express")
const corse = require("cors")
const app = express()

//define the first rout
app.get("/", function (req, res) {
    res.send("<h1>Welcome in your test application</h1>")
})


app.get("/data", function (req, res) {
    var _data = [{ id: 1, name: "Chadi" },
    { id: 2, name: "Chadi" },
    { id: 3, name: "Diya" },
    { id: 4, name: "Kamal" },
    { id: 5, name: "Mouhamad" },
    { id: 6, name: "fadia" },
    { id: 7, name: "moussa" },
    { id: 8, name: "ahmad" }]
    res.send(_data);
})



app.listen(process.env.PORT || 2919,
    () => console.log("Server is running ......."));