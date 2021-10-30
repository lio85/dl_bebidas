fetch("http://dl-bebidas-dashboard.herokuapp.com/api/allproducts")
//fetch("http://localhost:3070/api/allproducts")
    .then(function(response){
        return response.json();
    })
    .then(function(data_decode){
        const products=data_decode.listProducts;

        /* const general_container= document.querySelector('#general_container');
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

        general_container.appendChild(fragment) */

        const left_arrow= document.querySelector('.left_arrow')
        const right_arrow= document.querySelector('.right_arrow')
        const sliderCards= [...document.querySelectorAll('.slider__card')];

        let sliderCurrentProducts= [0,1,2]

        sliderCards[0].children[0].innerText= `${products[0].name} ${products[0].presentation}`
        sliderCards[0].children[1].attributes[0].value= `${products[0].image}`
        sliderCards[0].children[2].innerText= `$${products[0].price}`

        sliderCards[1].children[0].innerText= `${products[1].name} ${products[1].presentation}`
        sliderCards[1].children[1].attributes[0].value= `${products[1].image}`
        sliderCards[1].children[2].innerText= `$${products[1].price}`

        sliderCards[2].children[0].innerText= `${products[2].name} ${products[2].presentation}`
        sliderCards[2].children[1].attributes[0].value= `${products[2].image}`
        sliderCards[2].children[2].innerText= `$${products[2].price}`

        sliderCards[3].children[0].innerText= `${products[3].name} ${products[3].presentation}`
        sliderCards[3].children[1].attributes[0].value= `${products[3].image}`
        sliderCards[3].children[2].innerText= `$${products[3].price}`

        sliderCards[4].children[0].innerText= `${products[4].name} ${products[4].presentation}`
        sliderCards[4].children[1].attributes[0].value= `${products[4].image}`
        sliderCards[4].children[2].innerText= `$${products[4].price}`

        left_arrow.addEventListener('click', () => {
            if (sliderCurrentProducts[0] == 0){
                sliderCurrentProducts[0]= products.length-1;
                sliderCurrentProducts[1]--;
                sliderCurrentProducts[2]--;
            } else if (sliderCurrentProducts[1] == 0){
                sliderCurrentProducts[0]--;
                sliderCurrentProducts[1]= products.length-1;
                sliderCurrentProducts[2]--;
            } else if (sliderCurrentProducts[2] == 0){
                sliderCurrentProducts[0]--;
                sliderCurrentProducts[1]--;
                sliderCurrentProducts[2]= products.length-1;
            } else {
                sliderCurrentProducts[0]--;
                sliderCurrentProducts[1]--;
                sliderCurrentProducts[2]--;
            }
            sliderCards[0].children[0].innerText= `${products[sliderCurrentProducts[0]].name} ${products[sliderCurrentProducts[0]].presentation}`
            sliderCards[0].children[1].attributes[0].value= `${products[sliderCurrentProducts[0]].image}`
            sliderCards[0].children[2].innerText= `$${products[sliderCurrentProducts[0]].price}`

            sliderCards[1].children[0].innerText= `${products[sliderCurrentProducts[1]].name} ${products[sliderCurrentProducts[1]].presentation}`
            sliderCards[1].children[1].attributes[0].value= `${products[sliderCurrentProducts[1]].image}`
            sliderCards[1].children[2].innerText= `$${products[sliderCurrentProducts[1]].price}`

            sliderCards[2].children[0].innerText= `${products[sliderCurrentProducts[2]].name} ${products[sliderCurrentProducts[2]].presentation}`
            sliderCards[2].children[1].attributes[0].value= `${products[sliderCurrentProducts[2]].image}`
            sliderCards[2].children[2].innerText= `$${products[sliderCurrentProducts[2]].price}`
        })

        right_arrow.addEventListener('click', () => {

            if (sliderCurrentProducts[2] == products.length-1){
                sliderCurrentProducts[0]++;
                sliderCurrentProducts[1]++;
                sliderCurrentProducts[2]= 0;
            } else if (sliderCurrentProducts[1] == products.length-1){
                sliderCurrentProducts[0]++;
                sliderCurrentProducts[1]= 0;
                sliderCurrentProducts[2]++;
            } 
            else if (sliderCurrentProducts[0] == products.length-1){
                sliderCurrentProducts[0]= 0;
                sliderCurrentProducts[1]++;
                sliderCurrentProducts[2]++;
            } else {
                sliderCurrentProducts[0]++;
                sliderCurrentProducts[1]++;
                sliderCurrentProducts[2]++;
            }

            sliderCards[0].children[0].innerText= `${products[sliderCurrentProducts[0]].name} ${products[sliderCurrentProducts[0]].presentation}`
            sliderCards[0].children[1].attributes[0].value= `${products[sliderCurrentProducts[0]].image}`
            sliderCards[0].children[2].innerText= `$${products[sliderCurrentProducts[0]].price}`

            sliderCards[1].children[0].innerText= `${products[sliderCurrentProducts[1]].name} ${products[sliderCurrentProducts[1]].presentation}`
            sliderCards[1].children[1].attributes[0].value= `${products[sliderCurrentProducts[1]].image}`
            sliderCards[1].children[2].innerText= `$${products[sliderCurrentProducts[1]].price}`

            sliderCards[2].children[0].innerText= `${products[sliderCurrentProducts[2]].name} ${products[sliderCurrentProducts[2]].presentation}`
            sliderCards[2].children[1].attributes[0].value= `${products[sliderCurrentProducts[2]].image}`
            sliderCards[2].children[2].innerText= `$${products[sliderCurrentProducts[2]].price}`
        })
    })
    .catch(function(e){
        alert("Error!");
    })



    