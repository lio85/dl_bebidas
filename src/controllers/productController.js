const path= require('path');
module.exports= {
    show_category: (req,res)=> {
        const categories= ['aperitivos','cervezas','combos','gaseosas','vinos','whiskeys'];
        let view_path;
        for (category of categories){
            if(req.params.id== category){
                res.render(`products/${category}`)
                view_path= '../../views/products/'+category+'.html';
                res.sendFile(path.join(__dirname, view_path));
            }
        }
        
    }
}

