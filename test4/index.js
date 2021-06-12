let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
let container = document.querySelector('.container')
console.log(container)
const window_height = window.innerHeight;
const window_width = window.innerWidth;

container.style.height = `${window_height / 2}px`;
container.style.width = `${window_width / 2}px`;
container.style.overflow = "scroll";

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#bbf";


console.log(canvas)