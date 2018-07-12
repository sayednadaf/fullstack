

var numCounter =1

saveData = function(){

    var displayCounter = document.getElementById('counter')

    localStorage.setItem("counter",numCounter)

    var currentValue = localStorage.getItem("counter")
    displayCounter.innerHTML = currentValue
    numCounter++
}