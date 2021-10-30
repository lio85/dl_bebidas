fetch("http://dl-bebidas-dashboard.herokuapp.com/api/productsbycategory")
    .then(function(response){
        return response.json();
    })
    .then(function(data_decode){

        const {aperitivos, cervezas, gaseosas, vinos, whiskeys}= data_decode
        const left_arrows= document.querySelectorAll('.left_arrow')
        const right_arrows= document.querySelectorAll('.right_arrow')
        const sliderContainers= [...document.querySelectorAll('.slider__container')];

        for (let i=0; i< sliderContainers.length; i++){
            for(let j=0; j< sliderContainers[i].children.length; j++){
                switch (i){
                    case 0:
                        sliderContainers[i].children[j].children[0].innerText= `${aperitivos.listItems[j].name} ${aperitivos.listItems[j].presentation}`
                        sliderContainers[i].children[j].children[1].attributes[0].value= `${aperitivos.listItems[j].image}`
                        sliderContainers[i].children[j].children[2].innerText= `$${aperitivos.listItems[j].price}`
                        break;
                    case 1:
                        sliderContainers[i].children[j].children[0].innerText= `${cervezas.listItems[j].name} ${cervezas.listItems[j].presentation}`
                        sliderContainers[i].children[j].children[1].attributes[0].value= `${cervezas.listItems[j].image}`
                        sliderContainers[i].children[j].children[2].innerText= `$${cervezas.listItems[j].price}`
                        break;
                    case 2:
                        sliderContainers[i].children[j].children[0].innerText= `${gaseosas.listItems[j].name} ${gaseosas.listItems[j].presentation}`
                        sliderContainers[i].children[j].children[1].attributes[0].value= `${gaseosas.listItems[j].image}`
                        sliderContainers[i].children[j].children[2].innerText= `$${gaseosas.listItems[j].price}`
                        break;
                    case 3:
                        sliderContainers[i].children[j].children[0].innerText= `${vinos.listItems[j].name} ${vinos.listItems[j].presentation}`
                        sliderContainers[i].children[j].children[1].attributes[0].value= `${vinos.listItems[j].image}`
                        sliderContainers[i].children[j].children[2].innerText= `$${vinos.listItems[j].price}`
                        break;
                    case 4:
                        sliderContainers[i].children[j].children[0].innerText= `${whiskeys.listItems[j].name} ${whiskeys.listItems[j].presentation}`
                        sliderContainers[i].children[j].children[1].attributes[0].value= `${whiskeys.listItems[j].image}`
                        sliderContainers[i].children[j].children[2].innerText= `$${whiskeys.listItems[j].price}`
                        break;
                }
            };
        }

        for (let i=0; i< right_arrows.length; i++){
            right_arrows[i].addEventListener('click', (e)=> {
                switch(e.target.id){
                    case 'ra1':
                        console.log('Aperitivos++');
                        break;
                    case 'ra2':
                        console.log('Cervezas++');
                        break;
                    case 'ra3':
                        console.log('Gaseosas++');
                        break;
                    case 'ra4':
                        console.log('Vinos++');
                        break;
                    case 'ra5':
                        console.log('Whiskeys++');
                        break;
                }
            })
        }
        for (let i=0; i< left_arrows.length; i++){
            left_arrows[i].addEventListener('click', (e)=> {
                switch(e.target.id){
                    case 'la1':
                        console.log('Aperitivos--');
                        break;
                    case 'la2':
                        console.log('Cervezas--');
                        break;
                    case 'la3':
                        console.log('Gaseosas--');
                        break;
                    case 'la4':
                        console.log('Vinos--');
                        break;
                    case 'la5':
                        console.log('Whiskeys--');
                        break;
                }
            })
        }
    })
    .catch(function(e){
        alert("Error!");
    })