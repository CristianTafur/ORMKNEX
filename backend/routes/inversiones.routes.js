const routes=require('express').Router();
const usuarioCtrl=require('../controllers/usuario.controller');
const proyectoCtrl=require('../controllers/proyecto.controller');
/*
*usuario
*/
routes.get('/usuario',usuarioCtrl.getUsuarios);
routes.post('/usuario',usuarioCtrl.setUsuario);
routes.put('/usuario/:id',usuarioCtrl.UpdateUsuario);
routes.delete('/usuario/:id',usuarioCtrl.DeleteUsuario)
/*
*proyecto
*/
routes.get('/usuario/proyecto/:emprendedor/:id',usuarioCtrl.getProyecto);
routes.get('/usuario/proyecto/:emprendedor',usuarioCtrl.getProyectos); 
routes.post('/usuario/proyecto',proyectoCtrl.setProyecto);

routes.get('/proyecto',proyectoCtrl.getProyectos);
module.exports=routes;