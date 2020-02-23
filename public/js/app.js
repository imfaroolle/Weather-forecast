console.log("browser window log");

const form = document.querySelector('form');
const search = document.querySelector('input');
const message2 = document.querySelector('#message2');
const message1 = document.querySelector('#message1');
form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const lc = search.value;

    if(lc == ''){

        message2.textContent = "Location must be provided";
    }
    message2.textContent = "";
    fetch('/weather?address=' + lc).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error);
            message1.textContent = data.error;
        }
        else{
            
            
            console.log(data.forecast)
            message1.textContent = "Location : " + data.location;
            message2.textContent = " Forecast : " + data.forecast;
        }

    })
})


})