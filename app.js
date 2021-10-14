const express= require ('express');
const app= express();
const path= require('path'); 
const categoryRoutes= require('./src/routes/productRoutes');

app.use (express.static('./public'));

app.set ('view engine', 'ejs');

// app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', (req,res) => { 
    //res.sendFile(path.resolve(__dirname, 'views/index.html'))
    res.send('index');
});

app.use('/', categoryRoutes);

app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'));



