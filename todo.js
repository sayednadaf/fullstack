var inputValue = document.getElementById('taskValueId')
var counter = 1

addTask = function(){
    if(localStorage.getItem("taskCounter")===null){
    localStorage.setItem("taskCounter",counter)
    }else{
        counter=localStorage.getItem("taskCounter")
    }

    var currentTask = inputValue.value
    console.log("saving the task to localstorage")
    localStorage.setItem("task_"+ counter,currentTask)
    inputValue.value=""
    localStorage.setItem("taskCounter",++counter)

}

function loadTask(){
    console.log("loading tasks in the view")
    var container = document.getElementById("taskContainer")
    container.innerHTML = ""

    var newul = document.createElement("ol")
    //document.getElementById("taskContainer").appendChild(newul)
    container.appendChild(newul)

    var maxCounter = localStorage.getItem("taskCounter")
    for(var i=1; i<maxCounter;i++){
        var newli = document.createElement("li")
        var currentTask = localStorage.getItem("task_"+i)
        newli.innerHTML=currentTask
        newul.appendChild(newli)
    }
}
    loadTask()
   /*var newli1 = document.createElement("li")
    newli1.innerHTML("This is li one")
    newul.appendChild(newli1)

    var newli2 = document.createElement("li")
    newli2.innerHTML("This is li two")
    newol.appendChild(newli2)

    var newli3 = document.createElement("li")
    newli3.innerHTML("This is li three")
    newol.appendChild(newli3)*/
