const URL = `https://api.quotable.io/random`;

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
    } catch (error) {
       console.log(error, "Uh oh"); 
       document.querySelector("h1").textContent = "woops";
    }
}
getData(URL);