import {DOMSelectors} from "./DOM";
import '../css/style.css';

const URL = `https://ghibliapi.vercel.app/films`;

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
        /*document.querySelector("h1").textContent = data.title; */
        data.forEach(el => 
            /* document.querySelector("h1").textContent = el.title); */
             DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `<div class = "card">
                <h3 class="title">${el.title}</h3>
                <img src=${el.image} alt="image"> </img>
                <h4 class="misc">${el.release_date}</h4>
                <h5 class="misc">${el.running_time}</h5>
            </div>`
            ) 
        )
    } catch (error) {
       console.log(error, "Uh oh"); 
       document.querySelector("title").textContent = "woops";
    }
}
getData(URL); 