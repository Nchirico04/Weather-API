var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('/name')
var desc = document.querySelector('/desc')
var temp = document.querySelector('/temp')

fetch(https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key})
.then(response => response.json())
.then(data => console.log(data))
    var nameValue =data['name']
    var tempValue = data ['main'] [temp]
    
button.addEventListener ('click, function()')

catch(err => alert(Wrong City name!))
})
