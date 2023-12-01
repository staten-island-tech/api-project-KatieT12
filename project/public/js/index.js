/* import {DOMSelectors} from "./DOM"; */
const URL = `http://gateway.marvel.com:433/v1/public/comics?title=${comicName}&ts=1&apikey=407c85a54ac6c8685c6fb3876a2437e9b789cbf9&hash=ded5d96a44705aa9c63da8d151ad4365`;

async function getData(URL){
    try {
        //requesting a response REST API's
        const response = await fetch(URL);
        if(response.status !=200){
            throw new Error(response.statusText);
        }
        //convert response to JSON
        const data = await response.json();
        document.querySelector("h1").textContent = data.content; 
     /*    data.forEach(el => 
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class = "card">
                <h3 class="title">${el.title}</h3>
                <img src=${el.img} alt="image"> </img>
                <h4 class="misc">${el.misc}</h4>
                <h5 class="misc">${el.misc}</h5>
            </div>`
            )); */
    } catch (error) {
       console.log(error, "Uh oh"); 
       document.querySelector("h1").textContent = "woops";
    }
}
getData(URL);