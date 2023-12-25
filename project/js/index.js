import {DOMSelectors} from "./DOM";
import '../css/style.css';

const URL = `https://fortnite-api.com/v2/cosmetics/br`;
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

        data.data.forEach(obj => 
             DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class = "card">
                <h3 class="cardtitle">${obj.name}</h3>
                <img class="cover" src="${obj.images.icon}" alt="image">
                <h4 class="rarity">${obj.rarity.displayValue}</h4>
                <h5 class="misc">${obj.description}</h5>
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
    inputName.value = "";
};

function addCard(arr){
    arr.forEach((obj)=> DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h3 class="cardtitle">${obj.name}</h3>
        <img class="cover" src="${obj.images.icon}" alt="image">
        <h4 class="rarity">${obj.rarity.displayValue}</h4>
        <h5 class="misc">${obj.description}</h5>
    </div>`
))};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault(); 
    clearHTML();
    clearSearchFields();

    if(data.data.filter((el) => el.name === "inputName.value")){
        newArr = data.data.filter((el) => el.name === "inputName.value")
        addCard(newArr);
    } else{
        DOMSelectors.container.innerHTML ="Couldn't find that";
    }
}); 

// function expansion(){ //expanding card when clicking on it TBD
//     let cards = document.querySelector("#card")  
//    cards.forEach((card) => card.addEventListener("click", function(){
//        clearHTML();
//        DOMSelectors.container.insertAdjacentHTML(
//         "beforeend",
//         `<div class = "expandedCard">
//         <h3 class="cardtitle">${obj.name}</h3>
//         <img class="cover" src="${obj.images.icon}" alt="image">
//         <h4 class="rarity">${obj.rarity.displayValue}</h4>
//         <h5 class="misc">${obj.description}</h5>
//     </div>`
// )}))}; 

//    expansion()
/*
// function filtering(){
//     let options = document.querySelectorAll("#dropdown-content")  
//    options.forEach((choice) => choice.addEventListener("click", function(){
//        clearHTML();
//        let category = btn.textContent.toLowerCase() 
//        let newArr = cosmetics.filter((item) => item.type.object.value.includes(category));
//        insertCard(newArr)
//    })); 
//    };
//    filtering() */
 function filtering(){
   let buttons = document.querySelectorAll(".btns")  
  buttons.forEach((btn) => btn.addEventListener("click", function(){
   clearHTML();
        let category = btn.textContent 
        let newArr = data.data.filter((item) => item.path.includes(category));
        addCard(newArr)
       })); 
   };
   filtering() 

DOMSelectors.all.addEventListener("click", function(event){
    event.preventDefault();
    clearHTML();
    data.data.forEach(obj => 
        DOMSelectors.container.insertAdjacentHTML(
           "beforeend",
           `<div class = "card">
           <h3 class="cardtitle">${obj.name}</h3>
           <img class="cover" src="${obj.images.icon}" alt="image">
           <h4 class="rarity">${obj.rarity.displayValue}</h4>
           <h5 class="misc">${obj.description}</h5>
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
