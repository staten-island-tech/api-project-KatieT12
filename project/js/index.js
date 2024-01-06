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
                <img class="cover" src="${obj.images.icon}" alt="image">
                <h4 class="rarity">${obj.rarity.displayValue}</h4>
                <h5 class="misc">${obj.description}</h5>
                <button class = "more">Learn More</button>
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
        <button class = "more">Learn More</button>
    </div>`
))};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault(); 
    clearHTML();
    clearSearchFields();
    if(data.data.filter((el) => el.name === "inputName.value")){
        const newArr = data.data.filter((el) => el.name === "inputName.value")
        addCard(newArr);
    } else{
        DOMSelectors.container.innerHTML ="Couldn't find that";
    }
}); 

// function expansion(){ //expanding card when clicking on it TBD
//     let cards = document.querySelectorAll(".card")  
//    cards.forEach((card) => card.addEventListener("click", function(){
//        clearHTML();
//        cards.forEach((obj) => DOMSelectors.container.insertAdjacentHTML(
//         "beforeend",
//                 `<div class = "card">
//                 <h3 class="cardtitle">${obj.name}</h3>
//                 <img class="cover" src="${obj.icon}" alt="image">
//                 <h4 class="rarity">${obj.displayValue}</h4>
//                 <h5 class="misc">${obj.description}</h5>
//             </div>`
// ))}))}; 

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
   buttons.forEach((btn) => btn.addEventListener("click", function(event){
   event.preventDefault();
   clearHTML();
        let category = btn.textContent 
        let newArr = data.data.items.filter((item) => item.path.includes(category));
        addCard(newArr)
       })); 
   };
   filtering() 

let learnmore = document.querySelectorAll(".more")
learnmore.forEach((btn) => btn.addEventListener("click", function(event){
    //event.preventDefault();
    clearHTML();
    let popUp = document.querySelector(".expandedCard")
    popUp.style.display = "flex"
    console.log(event.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent);
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "expandedCard">
        <h3 class="cardtitle">${event.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent}</h3>
        <img class="cover" src="${learnmore.parentElement.icon}" alt="image">
        <h4 class="rarity">${learnmore.parentElement.displayValue}</h4>
        <h5 class="misc">${learnmore.parentElement.description}</h5>
    </div>`
    ) 
}))

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
            <button class = "more">Learn More</button>
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
//event . target element