console.log("test")

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');

const router1 = document.querySelector('#router1')

canvas.addEventListener('click', function() {
    console.log("A")
});
// document.addEventListener('click', function() {
//     console.log("A")
// });
canvas.addEventListener('mousewheel', function(){
    console.log("A")
})



// window.onload  = function() {
//     var canvas = document.getElementById('canvas')
//     var ctx = canvas.getContext('2d');

// }


// canvas.width = 1000
// canvas.height = 1000

// var routerImg = new Image()
// routerImg.src = 'router.png';
// routerImg.onload = function() {
//     ctx.drawImage(routerImg, 10,10)
// }

// let object = [
//     { "test1" : [10,10,40,40]}
// ]
// let scalevalue = 1;
// canvas.addEventListener('click', function(){
//     scalevalue += .1;
//     ctx.scale(scalevalue,scalevalue)
//     drawContents();
// })


// function drawContents(){
//     var newWidth = canvas.width * scalevalue;
//     var newHeight = canvas.height * scalevalue;
    
//     ctx.save();
//     ctx.translate(-((newWidth-canvas.width)/2), -((newHeight-canvas.height)/2));
//     ctx.scale(scalevalue, scalevalue);
//     ctx.clearRect(0, 0, canvas.width, canvas.heigh);
//     ctx.drawImage(copiedCanvas, 0, 0);
//     ctx.restore();
// }


// // let x = 100
// // canvas.addEventListener("click", function(e){
// //     console.log(e.offsetX)
// //     console.log(e.offsetY)
// //     console.log("PAGEX:",e.pageX)
// //     console.log("PAGEY:",e.pageY)
// //     console.log("canvas:",canvas.scrollY)
    
// // })
// ctx.fillRect(100,100,100,100)


// console.log(canvas)