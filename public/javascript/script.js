let searched_value;
let submit= document.querySelector('#submit');
let show_results= document.querySelector('#show_results');
let previous_searches= document.querySelector('#previous_searches');
let list= document.querySelector('#list');


submit.addEventListener("click",function(){
    console.log(localStorage);
    searched_value= document.querySelector('#searched_value').value;
    if(searched_value){
        document.querySelector('ol').innerHTML="";
        list.innerHTML="";
        fetch("https://api.giphy.com/v1/gifs/search?api_key=kr7EQC1QkOQJTzp0fv8tEMc7AE0B0hRr&q="+searched_value+"&limit=5&offset=0&rating=g&lang=en")
        .then(function(response){
            return response.json();
        })
        .then(function(data_decode){
            if(!localStorage.historial){
                let array=[];
                array.push(searched_value)
                localStorage.setItem("historial",JSON.stringify(array));
            }
            else {
                let array=JSON.parse(localStorage.historial);
                array.push(searched_value)
                localStorage.setItem("historial",JSON.stringify(array));
            }
            let array=JSON.parse(localStorage.historial);
            console.log('ARRAY');
            for (let i=0; i<array.length;i++){
                console.log(array[i]);
                list.innerHTML+='<li>'+array[i]+'</li>'
            }
            //localStorage.clear()
            show_results.style.display="block";
            previous_searches.style.display="block";
            if(data_decode.data.length>0){
                show_results.innerHTML="Gifs relacionados:";
                for (let i=0;i<data_decode.data.length;i++){
                    let gif = '<p>'+data_decode.data[i].title+'</p>';
                    gif += "<img src="+data_decode.data[i].images.original.url+">";
                    document.querySelector('ol').innerHTML+='<li>'+gif+'</li>'
                } 
            }
            else {
                show_results.innerHTML="No Results";
            }
        })
        .catch(function(e){
        alert("Error!");
        })
    }
    else{
        alert('Debe especificar que quiere buscar')
    }    
})



