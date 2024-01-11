import {DOMSelectors} from "./DOM";
import '../css/style.css';

const URL = `https://fortnite-api.com/v2/cosmetics/br/new`;
//https://gateway.marvel.com/v1/public/comics?ts=1&apikey=81cee0fda2f0bdfd993ee07078a68999&hash=4486abec9feb734885049f2117764b2b; marvel alt just in case 

async function getData(URL){
    try {
        //requesting a response REST API's
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        console.log(data); 

        data.data.items.forEach(obj => 
             DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class = "card">
                <h3 class="cardtitle">${obj.name}</h3>
                <img class="cover" src="${obj.images.icon}" alt="This is an image of '${obj.name}">
                <h4 class="rarity">${obj.rarity.displayValue}</h4>
                <h5 class="misc">${obj.description}</h5>
                <h5 class="id">ID = ${obj.id}</h5>
            </div>`
            ) 
        )
        DOMSelectors.changetheme.addEventListener("click", function (){
            if(document.body.classList.contains("light")){
                document.body.classList.add("dark");
                document.body.classList.remove("light");
            } else{
                document.body.classList.add("light");
                document.body.classList.remove("dark");
            }
        });
        
function clearHTML(){
    DOMSelectors.container.innerHTML = "";
};
        
function clearSearchFields(){
    inputID.value = "";
};
//form
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    clearHTML();
    const specificURL = `https://fortnite-api.com/v2/cosmetics/br/${inputID.value}`;

    async function getData(specificURL){
        try{
            const response = await fetch(specificURL);
            if(response.status !=200){
                throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data); 
        DOMSelectors.container.insertAdjacentHTML(
           "beforeend",
           `<div class = "expandedCard">
           <h3 class="expandedcardtitle">${data.data.name}</h3>
           <h3 class="set">${data.data.set.text}</h3>
           <img class="expandedcover" src="${data.data.images.icon}" alt="This is an image of '${data.data.name}">
           <h5 class="introduction">${data.data.introduction.text}</h5>
           <h5 class="expandedmisc">${data.data.description}</h5>
           <h4 class="expandedrarity">${data.data.rarity.displayValue}</h4>
           <h5 class="expandedid">ID = ${data.data.id}</h5>
       </div>`
       ) 
    } catch (error) {
    console.log(error, "Uh oh"); 
    document.querySelector("title").textContent = "woops";
    }
} 
    getData(specificURL);  
    clearSearchFields();
}); 

function addCard(arr){
    arr.forEach((obj)=> DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h3 class="cardtitle">${obj.name}</h3>
        <img class="cover" src="${obj.images.icon}" alt="image">
        <h4 class="rarity">${obj.rarity.displayValue}</h4>
        <h5 class="misc">${obj.description}</h5>
        <h5 class="misc">ID = ${obj.id}</h5>
    </div>`
))};

 function filtering(){
   let buttons = document.querySelectorAll(".btns")  
   buttons.forEach((btn) => btn.addEventListener("click", function(event){
   event.preventDefault();
   clearHTML();
        let category = btn.textContent 
        let newArr = data.data.items.filter((item) => item.path.includes(category));
        addCard(newArr)
       })); 
   };
   filtering() 

let all = document.querySelector(".all")
all.addEventListener("click", function(event){
    event.preventDefault();
    clearHTML();
    data.data.items.forEach(obj => 
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h3 class="cardtitle">${obj.name}</h3>
            <img class="cover" src="${obj.images.icon}" alt="image">
            <h4 class="rarity">${obj.rarity.displayValue}</h4>
            <h5 class="misc">${obj.description}</h5>
            <h5 class="misc">ID = ${obj.id}</h5>
        </div>`
       ) 
   )

});

    } catch (error) {
       console.log(error, "Uh oh"); 
       document.querySelector("title").textContent = "woops";
    }
}
getData(URL); 
