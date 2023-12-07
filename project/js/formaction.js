import {DOMSelectors} from "./DOM";

function clearFields(){
    inputTitle.value = "";
};

function addCard(){
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h3 class="title">${el.title}</h3>
        <img src=${el.image} alt="image"> </img>
        <h4 class="misc">${el.release_date}</h4>
        <h5 class="misc">${el.running_time}</h5>
    </div>`
    )};
DOMSelectors.form.addEventListener("submit", function(event){
     event.preventDefault();
     addCard();   
     clearFields();
     deleteCard();  
}); 