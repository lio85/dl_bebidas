var express= require('express');
const path= require('path');

const app= express();

app.use(express.static(path.resolve(__dirname , './public')));

const indexPath= path.join(__dirname,'views/index.html');
app.get('/', (req,res)=> {res.sendFile(indexPath)})

app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'));