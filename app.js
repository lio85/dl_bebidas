const express= require ('express');
const app= express();
const path= require('path'); 

const categoryRoutes= require('./src/routes/productRoutes');


app.get('/', (req,res) => { res.sendFile(path.join(__dirname, 'views/index.html'))});
app.use('/', categoryRoutes);


app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));



