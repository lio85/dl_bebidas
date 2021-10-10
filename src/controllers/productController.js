const path= require('path');
module.exports= {
    show_category: (req,res)=> {
        res.sendFile(path.join(__dirname, '../../views/products/aperitivos.html'));
    }
}

