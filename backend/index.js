const express= require('express');
const app= express(); 
const morgan=require('morgan'); 
app.set('port', process.env.PORT || 3000);
app.use(express.json()); 
app.use(morgan('dev'));
app.use('/colfunding', require('./routes/inversiones.routes'));
app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}/colfunding/usuario`);
});