fetch("http://dl-bebidas-dashboard.herokuapp.com/api/productsbycategory")
    .then(function(response){
        return response.json();
    })
    .then(function(data_decode){

        const {aperitivos, cervezas, gaseosas, vinos, whiskeys}= data_decode
        const left_arrows= document.querySelectorAll('.left_arrow')
        const right_arrows= document.querySelectorAll('.right_arrow')
        const sliderContainers= [...document.querySelectorAll('.slider__container')];

        let sliderAperitivos= [0,1,2,3,4];
        let sliderCervezas= [0,1,2,3,4];
        let sliderGaseosas= [0,1,2,3,4];
        let sliderVinos= [0,1,2,3,4];
        let sliderWhiskeys= [0,1,2,3,4];

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
                        if (sliderAperitivos[4] == aperitivos.listItems.length-1){
                            sliderAperitivos[0]++;
                            sliderAperitivos[1]++;
                            sliderAperitivos[2]++;
                            sliderAperitivos[3]++;
                            sliderAperitivos[4]= 0;
                        } else if (sliderAperitivos[3] == aperitivos.listItems.length-1){
                            sliderAperitivos[0]++;
                            sliderAperitivos[1]++;
                            sliderAperitivos[2]++;
                            sliderAperitivos[3]= 0;
                            sliderAperitivos[4]++;
                        }else if (sliderAperitivos[2] == aperitivos.listItems.length-1){
                            sliderAperitivos[0]++;
                            sliderAperitivos[1]++;
                            sliderAperitivos[2]= 0;
                            sliderAperitivos[3]++;
                            sliderAperitivos[4]++;
                        } else if (sliderAperitivos[1] == aperitivos.listItems.length-1){
                            sliderAperitivos[0]++;
                            sliderAperitivos[1]=0;
                            sliderAperitivos[2]++;
                            sliderAperitivos[3]++;
                            sliderAperitivos[4]++;
                        }else if (sliderAperitivos[0] == aperitivos.listItems.length-1){
                            sliderAperitivos[0]=0;
                            sliderAperitivos[1]++;
                            sliderAperitivos[2]++;
                            sliderAperitivos[3]++;
                            sliderAperitivos[4]++;
                        } else {
                            sliderAperitivos[0]++;
                            sliderAperitivos[1]++;
                            sliderAperitivos[2]++;
                            sliderAperitivos[3]++;
                            sliderAperitivos[4]++;
                        }
                        setChanges(0, sliderAperitivos, aperitivos);
                        break;
                        
                    case 'ra2':
                        if (sliderCervezas[4] == cervezas.listItems.length-1){
                            sliderCervezas[0]++;
                            sliderCervezas[1]++;
                            sliderCervezas[2]++;
                            sliderCervezas[3]++;
                            sliderCervezas[4]= 0;
                        } else if (sliderCervezas[3] == cervezas.listItems.length-1){
                            sliderCervezas[0]++;
                            sliderCervezas[1]++;
                            sliderCervezas[2]++;
                            sliderCervezas[3]= 0;
                            sliderCervezas[4]++;
                        }else if (sliderCervezas[2] == cervezas.listItems.length-1){
                            sliderCervezas[0]++;
                            sliderCervezas[1]++;
                            sliderCervezas[2]= 0;
                            sliderCervezas[3]++;
                            sliderCervezas[4]++;
                        } else if (sliderCervezas[1] == cervezas.listItems.length-1){
                            sliderCervezas[0]++;
                            sliderCervezas[1]=0;
                            sliderCervezas[2]++;
                            sliderCervezas[3]++;
                            sliderCervezas[4]++;
                        }else if (sliderCervezas[0] == cervezas.listItems.length-1){
                            sliderCervezas[0]=0;
                            sliderCervezas[1]++;
                            sliderCervezas[2]++;
                            sliderCervezas[3]++;
                            sliderCervezas[4]++;
                        } else {
                            sliderCervezas[0]++;
                            sliderCervezas[1]++;
                            sliderCervezas[2]++;
                            sliderCervezas[3]++;
                            sliderCervezas[4]++;
                        }
                        setChanges(1, sliderCervezas, cervezas);
                        break;
                        
                    case 'ra3':
                        if (sliderGaseosas[4] == gaseosas.listItems.length-1){
                            sliderGaseosas[0]++;
                            sliderGaseosas[1]++;
                            sliderGaseosas[2]++;
                            sliderGaseosas[3]++;
                            sliderGaseosas[4]= 0;
                        } else if (sliderGaseosas[3] == gaseosas.listItems.length-1){
                            sliderGaseosas[0]++;
                            sliderGaseosas[1]++;
                            sliderGaseosas[2]++;
                            sliderGaseosas[3]= 0;
                            sliderGaseosas[4]++;
                        }else if (sliderGaseosas[2] == gaseosas.listItems.length-1){
                            sliderGaseosas[0]++;
                            sliderGaseosas[1]++;
                            sliderGaseosas[2]= 0;
                            sliderGaseosas[3]++;
                            sliderGaseosas[4]++;
                        } else if (sliderGaseosas[1] == gaseosas.listItems.length-1){
                            sliderGaseosas[0]++;
                            sliderGaseosas[1]=0;
                            sliderGaseosas[2]++;
                            sliderGaseosas[3]++;
                            sliderGaseosas[4]++;
                        }else if (sliderGaseosas[0] == gaseosas.listItems.length-1){
                            sliderGaseosas[0]=0;
                            sliderGaseosas[1]++;
                            sliderGaseosas[2]++;
                            sliderGaseosas[3]++;
                            sliderGaseosas[4]++;
                        } else {
                            sliderGaseosas[0]++;
                            sliderGaseosas[1]++;
                            sliderGaseosas[2]++;
                            sliderGaseosas[3]++;
                            sliderGaseosas[4]++;
                        }
                        setChanges(2, sliderGaseosas, gaseosas);
                        break;
                    case 'ra4':
                        if (sliderVinos[4] == vinos.listItems.length-1){
                            sliderVinos[0]++;
                            sliderVinos[1]++;
                            sliderVinos[2]++;
                            sliderVinos[3]++;
                            sliderVinos[4]= 0;
                        } else if (sliderVinos[3] == vinos.listItems.length-1){
                            sliderVinos[0]++;
                            sliderVinos[1]++;
                            sliderVinos[2]++;
                            sliderVinos[3]= 0;
                            sliderVinos[4]++;
                        }else if (sliderVinos[2] == vinos.listItems.length-1){
                            sliderVinos[0]++;
                            sliderVinos[1]++;
                            sliderVinos[2]= 0;
                            sliderVinos[3]++;
                            sliderVinos[4]++;
                        } else if (sliderVinos[1] == vinos.listItems.length-1){
                            sliderVinos[0]++;
                            sliderVinos[1]=0;
                            sliderVinos[2]++;
                            sliderVinos[3]++;
                            sliderVinos[4]++;
                        }else if (sliderVinos[0] == vinos.listItems.length-1){
                            sliderVinos[0]=0;
                            sliderVinos[1]++;
                            sliderVinos[2]++;
                            sliderVinos[3]++;
                            sliderVinos[4]++;
                        } else {
                            sliderVinos[0]++;
                            sliderVinos[1]++;
                            sliderVinos[2]++;
                            sliderVinos[3]++;
                            sliderVinos[4]++;
                        }
                        setChanges(3, sliderVinos, vinos);
                        break;
                    case 'ra5':
                        if (sliderWhiskeys[4] == whiskeys.listItems.length-1){
                            sliderWhiskeys[0]++;
                            sliderWhiskeys[1]++;
                            sliderWhiskeys[2]++;
                            sliderWhiskeys[3]++;
                            sliderWhiskeys[4]= 0;
                        } else if (sliderWhiskeys[3] == whiskeys.listItems.length-1){
                            sliderWhiskeys[0]++;
                            sliderWhiskeys[1]++;
                            sliderWhiskeys[2]++;
                            sliderWhiskeys[3]= 0;
                            sliderWhiskeys[4]++;
                        }else if (sliderWhiskeys[2] == whiskeys.listItems.length-1){
                            sliderWhiskeys[0]++;
                            sliderWhiskeys[1]++;
                            sliderWhiskeys[2]= 0;
                            sliderWhiskeys[3]++;
                            sliderWhiskeys[4]++;
                        } else if (sliderWhiskeys[1] == whiskeys.listItems.length-1){
                            sliderWhiskeys[0]++;
                            sliderWhiskeys[1]=0;
                            sliderWhiskeys[2]++;
                            sliderWhiskeys[3]++;
                            sliderWhiskeys[4]++;
                        }else if (sliderWhiskeys[0] == whiskeys.listItems.length-1){
                            sliderWhiskeys[0]=0;
                            sliderWhiskeys[1]++;
                            sliderWhiskeys[2]++;
                            sliderWhiskeys[3]++;
                            sliderWhiskeys[4]++;
                        } else {
                            sliderWhiskeys[0]++;
                            sliderWhiskeys[1]++;
                            sliderWhiskeys[2]++;
                            sliderWhiskeys[3]++;
                            sliderWhiskeys[4]++;
                        }
                        setChanges(4, sliderWhiskeys, whiskeys);
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

        function setChanges (card__container, cards, category) {
            //for (let i=0; i< sliderContainers.length; i++){
                for(let i=0; i< sliderContainers[card__container].children.length; i++){
                    switch (i){
                        case 0:
                            sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[0]].name} ${category.listItems[cards[0]].presentation}`
                            sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[0]].image}`
                            sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[0]].price}`
                            break;
                        case 1:
                            sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[1]].name} ${category.listItems[cards[1]].presentation}`
                            sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[1]].image}`
                            sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[1]].price}`
                            break;
                        case 2:
                            sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[2]].name} ${category.listItems[cards[2]].presentation}`
                            sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[2]].image}`
                            sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[2]].price}`
                            break;
                        case 3:
                            sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[3]].name} ${category.listItems[cards[3]].presentation}`
                            sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[3]].image}`
                            sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[3]].price}`
                            break;
                        case 4:
                            sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[4]].name} ${category.listItems[cards[4]].presentation}`
                            sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[4]].image}`
                            sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[4]].price}`
                            break;
                    }
                };
            //}
        } 
    })
    .catch(function(e){
        alert("Error!");
    })