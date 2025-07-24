const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProyectoSchema =  new Schema({
    nombre:{
        type:String,
        require:true,
        maxLenth:100
    },
    imagen:{
        type:String,
        require:true,
        maxLenth:100
    },
      repo:{
        type:String,
        require:true,
        maxLenth:100
    },
    tecnologias:{
        type:[String]
    },
    descripcion:{
        type:String,
        require:true,
        maxLenth:100
    }

})
 module.exports =mongoose.model("proyecto",ProyectoSchema)