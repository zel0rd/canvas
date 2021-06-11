console.log("test")

var canvas = document.querySelector('#canvas')
var context = canvas.getContext('2d');

// const router1 = document.querySelector('#router1')

// canvas.addEventListener('click', function () {
//     console.log("A")
// });
// // document.addEventListener('click', function() {
// //     console.log("A")
// // });
// canvas.addEventListener('mousewheel', function () {
//     console.log("A")
// })



// window.onload  = function() {
//     var canvas = document.getElementById('canvas')
//     var ctx = canvas.getContext('2d');

// }


canvas.width = 1000
canvas.height = 1000

class Node {
    constructor(xpoint, ypoint, width, img, visible = true) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.width = width;
        this.img = img;
        this.visible = visible
    }

    draw(ctx) {
        ctx.clearRect(this.xpoint + 10, this.ypoint, this.xpoint + this.width - 10, this.ypoint + this.width);
        if (this.visible) {
            var routerImg = new Image()
            routerImg.src = this.img;
            routerImg.onload = () => {
                ctx.drawImage(routerImg, this.xpoint, this.ypoint)
            }
        }
    }

    clickNode(x, y) {
        let minX = this.xpoint
        let minY = this.ypoint
        let maxX = this.xpoint + this.width
        let maxY = this.ypoint + this.width
        if (this.isInIndex(minX, maxX, x) && this.isInIndex(minY, maxY, y)) {
            this.visible = !this.visible
            console.log("A")
            this.draw(context)
        }
    }

    isInIndex(min, max, middle) {
        let result = false;
        if (min <= middle && middle < max) {
            result = true;
        }
        return result
    }
}

let router1 = new Node(10, 10, 100, 'router.png', true);
let router2 = new Node(110, 10, 100, 'router.png', true);
router1.draw(context);
router2.draw(context);


canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // console.log('x : ', x, ' y : ', y)
    // console.log('x : ', e.clientX, ' y : ', e.clientY)
    router1.clickNode(x, y);
    router2.clickNode(x, y);
})



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


// let x = 100
// canvas.addEventListener("click", function (e) {
//     console.log(e.offsetX)
//     console.log(e.offsetY)
//     console.log("PAGEX:", e.pageX)
//     console.log("PAGEY:", e.pageY)
//     console.log("canvas:", canvas.scrollIntoView)
// })
// ctx.fillRect(100,100,100,100)


// console.log(canvas)