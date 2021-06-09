console.log("test")

var canvas = document.querySelector('canvas')

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.width = 1000
canvas.height = 1000

var c = canvas.getContext('2d');
var routerImg = new Image()
routerImg.src = 'router.png';
routerImg.onload = function() {
    c.drawImage(routerImg, 10,10)
    c.drawImage(routerImg, 30,30)
    c.drawImage(routerImg, 50,50)
    c.drawImage(routerImg, 70,70)
}

let object = [
    { "test1" : [10,10,40,40]}
]
canvas.addEventListener("click", function(e){
    console.log(e.offsetX)
    console.log(e.offsetY)
    

})
c.fillRect(100,100,100,100)


console.log(canvas)