fetch("https://dl-bebidas-dashboard.herokuapp.com/api/allproducts")
    .then(function(response){
        return response.json();
    })
    .then(function(data_decode){
        var listProducts=data_decode.listProducts;

        var general_container= document.querySelector('#general_container');
        var fragment= document.createDocumentFragment();
        
        for (product of listProducts){
            var product_container= document.createElement("article");
            product_container.classList.add("product_container");
                var nameProduct= document.createElement("span");
                nameProduct.textContent= `${product.name} ${product.presentation}`
                var imageProduct= document.createElement("img");
                imageProduct.setAttribute("src",product.image);
                var priceProduct= document.createElement("span");
                priceProduct.textContent= `$${product.price}`
                
                product_container.appendChild(nameProduct)   
                product_container.appendChild(imageProduct) 
                product_container.appendChild(priceProduct)  
                
                fragment.appendChild(product_container);
            
        }

        general_container.appendChild(fragment)

    })
    .catch(function(e){
        alert("Error!");
    })



    