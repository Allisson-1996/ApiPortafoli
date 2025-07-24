const express = require("express")
const  controllersProyect = require ("../controllers/controllersPoroyect")
const router =express.Router()

router.get("/",controllersProyect.ProyectosList)
router.post("/",controllersProyect.crearProyecto)
router.get("/:id",controllersProyect.obtenProyectoPorId)
router.put("/:id",controllersProyect.modificarProyecto)
router.delete("/:id",controllersProyect.eliminarProyecto)
router.delete("/:id",controllersProyect.eliminarProyectoNombre)



 /* router.get("/",(req,res)=>{
    console.log("hola router")
    res.send("hola desde router")

})*/
module.exports =router