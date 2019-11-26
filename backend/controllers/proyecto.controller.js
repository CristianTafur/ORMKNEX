const proyecto=require('../models/proyecto');

const proyectoCtrl={};
proyectoCtrl.getProyectos=async (req,res)=>{
    proyecto('proyecto').where({estado:true}).select().then((proyectos)=>{
        res.json(proyectos); 
    }).catch((err)=>{
        res.status(500).json({status:err});
    });
}
proyectoCtrl.setProyecto=async (req,res)=>{
    proyecto('proyecto').insert(req.body).then(()=>{ 
                res.json(req.body);
            }).catch((err)=>{
                res.status(500).json({status:err});
            }); 
}
module.exports=proyectoCtrl;