dragStartNow = function(e){
    console.log("On drag event is called now")
    e.dataTransfer.setData("sourceId",e.target.id)
}

dragOverNow = function(e){
    e.preventDefault()
    console.log("I am dragging on div 2")

}

dropNow = function(e){
    e.preventDefault()
    console.log("I am being dropped on div 2")
    var temp = e.dataTransfer.getData("sourceId")
    var tempImg = document.getElementById(temp)
    e.target.appendChild(tempImg)
}

sourceDragOver = function(e){
    e.preventDefault()
    console.log("I am dragging on div 1")
}

sourceDrop = function(e){
    e.preventDefault()
    console.log("I am being dropped on div 1")
    var temp = e.dataTransfer.getData("sourceId")
    var tempImg = document.getElementById(temp)
    e.target.appendChild(tempImg)
}