
const ProyectosModel = require("../modells/proyectos")

exports.Hola = (req,res)=>{
    console.log("hola desde el controlador ")
    res.send("hola desde el controlador ")
}

exports.ProyectosList =async(req,res)=>{
    try{
        const proyectosList = await ProyectosModel.find({})
        return res.status(200).json(proyectosList)

    }catch(error){
        return res.status(500).send(error)
    }

}

exports.crearProyecto = async (req,res)=>{ 
    try{
        const proyecto=req.body
        await ProyectosModel.create(proyecto)
        return res.status(201).json(proyecto)
        return res.send(req.body)
    }catch(error){
        return res.status(500).send(error)

    }
}
exports.obtenProyectoPorId=async(req,res)=>{
    try{
        const {id} = req.params
        const proyectos = await ProyectosModel.findById(id)
        return res.status(200).json(proyectos)
    }catch(error){
        console.error(error)
        return res.status(500).send(error)

    }
}
exports.modificarProyecto =async (req,res)=>{
    try{
        const{id}= req.params
        const proyecto=req.body
        const proyectoCambiado = await ProyectosModel.findByIdAndUpdate(id,proyecto,{new:true})
        return res.status(200).json(proyectoCambiado)
    }catch (error){
        return res.status(500).send(error)
    }
}
exports.eliminarProyecto = async(req,res)=>{
try {
    const{id} =req.params
    if(id.length!=24){
        return res.status(400).json({message:"id no valido"})
    }
    await ProyectosModel.findByIdAndDelete(id)
     return res.status(200).json({message:`proyecto con ${id} eliminado`})
  } catch (error) {
     return res.status(500).send(error) 
   }
}
exports.eliminarProyectoNombre = async (req,res)=>{
    try {
        const nombre = req.body.nombre
        const {nombreParam}=req.params
         if(nombre != nombreParam){
            return res.status(400).json({message:"datos incosistentes"})
         }
        const proyecto = await ProyectosModel.findByIdAndDelete({"nombre":nombre})
        return res.status(200).json(proyecto)
    } catch (error) {
        return res.status(500).send(error)
    }
}