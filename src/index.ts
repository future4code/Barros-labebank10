import express from 'express'
import cors from 'cors'


const expres = require("express")
const app = express()

//app.use = (express.json())

app.use(cors)

app.get("/legal", function(req, res){

    //const id = req.params.id
    //res.status(201).send("Há!!! funcionado")
    res.send("Há!!! funcionado")
    
})


app.listen(8081, () => {
    console.log("Servidor rodando na porta 3080");
});