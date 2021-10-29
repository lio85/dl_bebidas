fetch("http://dl-bebidas-dashboard.herokuapp.com/api/allproducts")
//fetch("http://localhost:3070/api/allproducts")
    .then(function(response){
        return response.json();
    })
    .then(function(data_decode){
        const listProducts=data_decode.listProducts;

        const general_container= document.querySelector('#general_container');
        const fragment= document.createDocumentFragment();
        
        for (product of listProducts){
            const product_container= document.createElement("article");
            product_container.classList.add("product_container");
                const nameProduct= document.createElement("span");
                nameProduct.textContent= `${product.name} ${product.presentation}`
                const imageProduct= document.createElement("img");
                imageProduct.setAttribute("src",product.image);
                const priceProduct= document.createElement("span");
                priceProduct.classList.add('price')
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



    