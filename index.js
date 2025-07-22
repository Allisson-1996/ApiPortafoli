const express =require("express")
const root=require("./rotes/root")//
require("dotenv").config()
const app = express()
const PORT = process.env.PORT  || 3006
app.set("port",PORT)


 app.get("/",(req,res)=>{
    console.log("hola mundo")
    res.send(`hola mundo`)
  })
app.use("/api/proyectos",root)//
app.listen(PORT,()=>{
  console.log(`Escuchando en el puerto ${PORT}`)

 
   
})
