import {DOMSelectors} from "./DOM";
import '../css/style.css';

const URL = `https://valorant-api.com/v1/agents`;
//https://gateway.marvel.com/v1/public/comics?ts=1&apikey=81cee0fda2f0bdfd993ee07078a68999&hash=a49c63b1d849e5be3f6690dacaf948f2

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

        data.forEach(el => 
             DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class = "card">
                <h3 class="title">${el.displayName}</h3>
                <img class="cover" src="${el.image}" alt="image">
                <h4 class="misc">${el.actor}</h4>
                <h5 class="misc">${el.house}</h5>
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
    arr.forEach((x)=> DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h3 class="title">${x.title}</h3>
        <img src=${x.image} alt="image"> </img>
        <h4 class="misc">${x.release_date}</h4>
        <h5 class="misc">${x.running_time}</h5>
    </div>`
))};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault(); 
    clearHTML();
    clearSearchFields();
    let newArr = data.filter((el) => el.name === "inputName.value");
    addCard(newArr);
}); 
function filtering(){
    let buttons = document.querySelectorAll("#button")  
   buttons.forEach((btn) => btn.addEventListener("click", function(){
       clearHTML();
       let typeHoliday = btn.textContent.toLowerCase() 
       let newArr = URL.filter((holiday) => holiday.type.includes(typeHoliday));
       insertCard(newArr)
   })); 
   };
   filtering()







    } catch (error) {
       console.log(error, "Uh oh"); 
       document.querySelector("title").textContent = "woops";
    }
}
getData(URL); 
