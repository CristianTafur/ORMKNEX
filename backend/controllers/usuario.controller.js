const usuario=require('../models/usuario');  
const usuarioCtrl={};

usuarioCtrl.getUsuarios=async (req,res)=>{
    
    usuario('usuario').where({estado:true})
           .select()
           .then((usuarios)=>{  
                res.json({usuarios:usuarios});
            }).catch((err)=>{
                res.status(500).json({status:err});
            }); 
}
usuarioCtrl.setUsuario=async (req,res)=>{
    usuario('usuario').insert(req.body)
           .then(()=>{ 
                res.json(req.body);
            }).catch((err)=>{
                res.status(500).json({status:err});
            }); 
}
usuarioCtrl.UpdateUsuario=async (req,res)=>{
    const usuario=req.body;
    usuario('usuario').where(req.params)
    .update(usuario).then(()=>{
        res.json(usuario);
    }).catch((err)=>{
        res.status(500).json({status:err});
    }); 
}
usuarioCtrl.DeleteUsuario=async (req,res)=>{ 
    usuario('usuario').where(req.params)
    .update({estado:false}).then(()=>{
        res.json(usuario);
    }).catch((err)=>{
        res.status(500).json({status:err});
    }); 
}
usuarioCtrl.getProyectos=async (req,res)=>{
    const {emprendedor}=req.params;  
    usuario('usuario').join('proyecto', 'usuario.id', 'proyecto.emprendedor')
    .whereRaw('proyecto.estado =?',[true])
    .andWhere('emprendedor',emprendedor)
    .select().then((proyectos)=>{   
        res.json({usuarios:proyectos});
    }).catch((err)=>{  
        res.status(500).json({status:err});
    });
}
usuarioCtrl.getProyecto=async (req,res)=>{
    const {id,emprendedor}=req.params; 
    usuario('usuario').join('proyecto', 'usuario.id', 'proyecto.emprendedor')
    .whereRaw('proyecto.estado =?',[true])
    .andWhere('emprendedor',emprendedor)
    .andWhere('proyecto.id',id)
    .select("proyecto.nombre","proyecto.descripcion","monto","proyecto.fecha")
    .first()
    .then((proyecto)=>{   
        res.json({usuarios:proyecto});
    }).catch((err)=>{ 
        res.status(500).json({status:err});
    });  
}
module.exports=usuarioCtrl;