const burguer_menu= document.querySelector('.burguer_menu');
const menu_nav= document.querySelector('.menu_nav');
burguer_menu.addEventListener('click', ()=>{
    menu_nav.classList.toggle('click_burguer_menu');
});

const items__nav= document.querySelectorAll('.items__nav');
for (let i=0; i< items__nav.length; i++){
    items__nav[i].addEventListener('click', (e)=> {
        menu_nav.classList.remove('click_burguer_menu');
    });
};

fetch("http://dl-bebidas-dashboard.herokapp.com/api/productsbycategory")
    .then(function(response){
        return response.json();
    })
    .then(function(data_decode){
        const {aperitivos, cervezas, gaseosas, vinos, whiskeys}= data_decode
        const left_arrows= document.querySelectorAll('.fa-chevron-left')
        const right_arrows= document.querySelectorAll('.fa-chevron-right')
        const sliderContainers= [...document.querySelectorAll('.slider')];

        let sliderAperitivos= [0,1,2,3,4];
        let sliderCervezas= [0,1,2,3,4];
        let sliderGaseosas= [0,1,2,3,4];
        let sliderVinos= [0,1,2,3,4];
        let sliderWhiskeys= [0,1,2,3,4];

        
        setChanges(0, sliderAperitivos, aperitivos);
        setChanges(1, sliderCervezas, cervezas);
        setChanges(2, sliderGaseosas, gaseosas);
        setChanges(3, sliderVinos, vinos);
        setChanges(4, sliderWhiskeys, whiskeys);

        for (let i=0; i< right_arrows.length; i++){
            right_arrows[i].addEventListener('click', (e)=> {
                switch(e.target.id){
                    case 'ra1':
                        validationsRightArrow(sliderAperitivos, aperitivos);
                        setChanges(0, sliderAperitivos, aperitivos);
                        break;
                    case 'ra2':
                        validationsRightArrow(sliderCervezas, cervezas);
                        setChanges(1, sliderCervezas, cervezas);
                        break;
                    case 'ra3':
                        validationsRightArrow(sliderGaseosas, gaseosas);
                        setChanges(2, sliderGaseosas, gaseosas);
                        break;
                    case 'ra4':
                        validationsRightArrow(sliderVinos, vinos);
                        setChanges(3, sliderVinos, vinos);
                        break;
                    case 'ra5':
                        validationsRightArrow(sliderWhiskeys, whiskeys);
                        setChanges(4, sliderWhiskeys, whiskeys);
                        break;
                }
            })
        }

        for (let i=0; i< left_arrows.length; i++){
            left_arrows[i].addEventListener('click', (e)=> {
                switch(e.target.id){
                    case 'la1':
                        validationsLeftArrow(sliderAperitivos, aperitivos);
                        setChanges(0, sliderAperitivos, aperitivos);
                        break;
                    case 'la2':
                        validationsLeftArrow(sliderCervezas, cervezas);
                        setChanges(1, sliderCervezas, cervezas);
                        break;
                    case 'la3':
                        validationsLeftArrow(sliderGaseosas, gaseosas);
                        setChanges(2, sliderGaseosas, gaseosas);
                        break;
                    case 'la4':
                        validationsLeftArrow(sliderVinos, vinos);
                        setChanges(3, sliderVinos, vinos);
                        break;
                    case 'la5':
                        validationsLeftArrow(sliderWhiskeys, whiskeys);
                        setChanges(4, sliderWhiskeys, whiskeys);
                        break;
                }
            })
        }

        function validationsLeftArrow (array, category) {
            if (array[0] == 0){
                array[0]= category.listItems.length-1;
                array[1]--;
                array[2]--;
                array[3]--;
                array[4]--;
            } else if (array[1] == 0){
                array[0]--;
                array[1]= category.listItems.length-1;
                array[2]--;
                array[3]--;
                array[4]--;
            } else if (array[2] == 0){
                array[0]--;
                array[1]--;
                array[2]= category.listItems.length-1;
                array[3]--;
                array[4]--;
            } else if (array[3] == 0){
                array[0]--;
                array[1]--;
                array[2]--;
                array[3]= category.listItems.length-1;
                array[4]--;
            } else if (array[4] == 0){
                array[0]--;
                array[1]--;
                array[2]--;
                array[3]--;
                array[4]= category.listItems.length-1;
            } else {
                array[0]--;
                array[1]--;
                array[2]--;
                array[3]--;
                array[4]--;
            }
        }

        function validationsRightArrow (array, category) {
            if (array[4] == category.listItems.length-1){
                array[0]++;
                array[1]++;
                array[2]++;
                array[3]++;
                array[4]= 0;
            } else if (array[3] == category.listItems.length-1){
                array[0]++;
                array[1]++;
                array[2]++;
                array[3]= 0;
                array[4]++;
            }else if (array[2] == category.listItems.length-1){
                array[0]++;
                array[1]++;
                array[2]= 0;
                array[3]++;
                array[4]++;
            } else if (array[1] == category.listItems.length-1){
                array[0]++;
                array[1]=0;
                array[2]++;
                array[3]++;
                array[4]++;
            }else if (array[0] == category.listItems.length-1){
                array[0]=0;
                array[1]++;
                array[2]++;
                array[3]++;
                array[4]++;
            } else {
                array[0]++;
                array[1]++;
                array[2]++;
                array[3]++;
                array[4]++;
            }
        }

        function setChanges (card__container, cards, category) {
            for(let i=0; i< sliderContainers[card__container].children.length; i++){
                switch (i){
                    case 0:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[0]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[0]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[0]].price}`
                        break;
                    case 1:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[1]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[1]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[1]].price}`
                        break;
                    case 2:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[2]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[2]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[2]].price}`
                        break;
                    case 3:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[3]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[3]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[3]].price}`
                        break;
                    case 4:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[4]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[4]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[4]].price}`
                        break;
                }
            };
        } 
    })
    .catch(function(e){
        alert(e);
    })


/*
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

        
        setChanges(0, sliderAperitivos, aperitivos);
        setChanges(1, sliderCervezas, cervezas);
        setChanges(2, sliderGaseosas, gaseosas);
        setChanges(3, sliderVinos, vinos);
        setChanges(4, sliderWhiskeys, whiskeys);

        for (let i=0; i< right_arrows.length; i++){
            right_arrows[i].addEventListener('click', (e)=> {
                switch(e.target.id){
                    case 'ra1':
                        validationsRightArrow(sliderAperitivos, aperitivos);
                        setChanges(0, sliderAperitivos, aperitivos);
                        break;
                    case 'ra2':
                        validationsRightArrow(sliderCervezas, cervezas);
                        setChanges(1, sliderCervezas, cervezas);
                        break;
                    case 'ra3':
                        validationsRightArrow(sliderGaseosas, gaseosas);
                        setChanges(2, sliderGaseosas, gaseosas);
                        break;
                    case 'ra4':
                        validationsRightArrow(sliderVinos, vinos);
                        setChanges(3, sliderVinos, vinos);
                        break;
                    case 'ra5':
                        validationsRightArrow(sliderWhiskeys, whiskeys);
                        setChanges(4, sliderWhiskeys, whiskeys);
                        break;
                }
            })
        }

        for (let i=0; i< left_arrows.length; i++){
            left_arrows[i].addEventListener('click', (e)=> {
                switch(e.target.id){
                    case 'la1':
                        validationsLeftArrow(sliderAperitivos, aperitivos);
                        setChanges(0, sliderAperitivos, aperitivos);
                        break;
                    case 'la2':
                        validationsLeftArrow(sliderCervezas, cervezas);
                        setChanges(1, sliderCervezas, cervezas);
                        break;
                    case 'la3':
                        validationsLeftArrow(sliderGaseosas, gaseosas);
                        setChanges(2, sliderGaseosas, gaseosas);
                        break;
                    case 'la4':
                        validationsLeftArrow(sliderVinos, vinos);
                        setChanges(3, sliderVinos, vinos);
                        break;
                    case 'la5':
                        validationsLeftArrow(sliderWhiskeys, whiskeys);
                        setChanges(4, sliderWhiskeys, whiskeys);
                        break;
                }
            })
        }

        function validationsLeftArrow (array, category) {
            if (array[0] == 0){
                array[0]= category.listItems.length-1;
                array[1]--;
                array[2]--;
                array[3]--;
                array[4]--;
            } else if (array[1] == 0){
                array[0]--;
                array[1]= category.listItems.length-1;
                array[2]--;
                array[3]--;
                array[4]--;
            } else if (array[2] == 0){
                array[0]--;
                array[1]--;
                array[2]= category.listItems.length-1;
                array[3]--;
                array[4]--;
            } else if (array[3] == 0){
                array[0]--;
                array[1]--;
                array[2]--;
                array[3]= category.listItems.length-1;
                array[4]--;
            } else if (array[4] == 0){
                array[0]--;
                array[1]--;
                array[2]--;
                array[3]--;
                array[4]= category.listItems.length-1;
            } else {
                array[0]--;
                array[1]--;
                array[2]--;
                array[3]--;
                array[4]--;
            }
        }

        function validationsRightArrow (array, category) {
            if (array[4] == category.listItems.length-1){
                array[0]++;
                array[1]++;
                array[2]++;
                array[3]++;
                array[4]= 0;
            } else if (array[3] == category.listItems.length-1){
                array[0]++;
                array[1]++;
                array[2]++;
                array[3]= 0;
                array[4]++;
            }else if (array[2] == category.listItems.length-1){
                array[0]++;
                array[1]++;
                array[2]= 0;
                array[3]++;
                array[4]++;
            } else if (array[1] == category.listItems.length-1){
                array[0]++;
                array[1]=0;
                array[2]++;
                array[3]++;
                array[4]++;
            }else if (array[0] == category.listItems.length-1){
                array[0]=0;
                array[1]++;
                array[2]++;
                array[3]++;
                array[4]++;
            } else {
                array[0]++;
                array[1]++;
                array[2]++;
                array[3]++;
                array[4]++;
            }
        }

        function setChanges (card__container, cards, category) {
            for(let i=0; i< sliderContainers[card__container].children.length; i++){
                switch (i){
                    case 0:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[0]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[0]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[0]].price}`
                        break;
                    case 1:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[1]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[1]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[1]].price}`
                        break;
                    case 2:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[2]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[2]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[2]].price}`
                        break;
                    case 3:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[3]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[3]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[3]].price}`
                        break;
                    case 4:
                        sliderContainers[card__container].children[i].children[0].innerText= `${category.listItems[cards[4]].name}`
                        sliderContainers[card__container].children[i].children[1].attributes[0].value= `${category.listItems[cards[4]].image}`
                        sliderContainers[card__container].children[i].children[2].innerText= `$${category.listItems[cards[4]].price}`
                        break;
                }
            };
        } 
    })
    .catch(function(e){
        alert("Error!");
    }) */