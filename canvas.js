var myCanvas = document.getElementById("artboard")

var canvas = myCanvas.getContext("2d")

/*canvas.moveTo(0,0)
canvas.lineTo(400,400)
canvas.stroke()

canvas.beginPath()
canvas.arc(100,100,50,360,true)
canvas.stroke()*/

canvas.moveTo(200,200)
canvas.beginPath()
canvas.arc(200,200,100,2*Math.PI,false)
canvas.stroke()


canvas.beginPath()
canvas.arc(160,160,10,2*Math.PI,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(240,160,10,2*Math.PI,false)
canvas.stroke()

canvas.moveTo(200,170)
canvas.lineTo(200,200)
canvas.stroke()

canvas.beginPath()
canvas.arc(200,240,25,Math.PI,false)
canvas.stroke()
