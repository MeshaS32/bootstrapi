let img = document.querySelector("img")
let dogButton = document.querySelector('button');
console.log(1)

fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){
    console.log(2)
     return(response.json())
     
})
.then(function(data){
    console.log(3)
    console.log(data)
    console.log(data.message)

    img.src = data.message


})
console.log(4)

dogButton.addEventListener("click", () =>{
    
fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){
    console.log(2)
     return(response.json())
     
})
.then(function(data){
    console.log(3)
    console.log(data)
    console.log(data.message)

    img.src = data.message

})

})

//PART 2

let weatherForm = document.querySelector("#weatherForm")
let cityInput = document.querySelector("#cityInput")
let temp = document.querySelector("#temp")
let wind = document.querySelector("#wind")
let description = document.querySelector("#des")
let sButton = document.querySelector('#submit')

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // let url = `https://goweather.herokuapp.com/weather/${cityInput.value}`;
    console.log(`Input: ${cityInput.value}`);
   

    fetch(encodeURI(`https://goweather.herokuapp.com/weather/${cityInput.value}`))
    .then(function(response){
        console.log(2)
         return(response.json());
         
    })
    .then(function(data){
        console.log(data.forecast[0]);
        temp.innerText = data.temperature
        wind.innerHTML = data.wind
        description.innerHTML = data.description
    
    })
    cityInput.value = ""
    })

    



