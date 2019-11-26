const knex =require('../database/database');
knex.schema.createTable('proyecto', (table) =>{
  table.increments('id');
  table.text('emprendedor');
  table
      .integer('emprendedor')
      .unsigned()
      .references('usuario.id');
  table.text('nombre');
  table.text('descripcion'); 
  table.bigint('monto');
  table.date('fecha');
  table.boolean('estado');
})
module.exports=knex;