const express = require("express")
const  controllersProyect = require ("../controllers/controllersPoroyect")
const router =express.Router()

router.get("/",controllersProyect.Hola)


 /* router.get("/",(req,res)=>{
    console.log("hola router")
    res.send("hola desde router")

})*/
module.exports =router