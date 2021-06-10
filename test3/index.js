const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const container = document.querySelector('#container-btn1')

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

ctx.fillStyle = "red";
ctx.fillRect(0,0, canvas.width, canvas.height)

document.addEventListener('focus', redraw, true);
document.addEventListener('blur', redraw, true);
canvas.addEventListener('click', handleClick, false);

redraw();

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawButton(button1, 20, 20);
  drawButton(button2, 20, 80);
}

function handleClick(e) {
  // Calculate click coordinates
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  // Focus button1, if appropriate
  drawButton(button1, 20, 20);
  if (ctx.isPointInPath(x, y)) {
    button1.focus();
    let popup = document.createElement('div');
    let newContent = document.createTextNode("test");
    popup.appendChild(newContent)
    drawButton(popup, 100,20);
  }

  // Focus button2, if appropriate
  drawButton(button2, 20, 80);
  if (ctx.isPointInPath(x, y)) {
    button2.focus();
  }
}

function drawButton(el, x, y) {
  const active = document.activeElement === el;
  const width = 150;
  const height = 40;

  // Button background
  ctx.fillStyle = active ? 'pink' : 'lightgray';
  ctx.fillRect(x, y, width, height);

  // Button text
  ctx.font = '15px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = active ? 'blue' : 'black';
  ctx.fillText(el.textContent, x + width / 2, y + height / 2);

  // Define clickable area
  ctx.beginPath();
  ctx.rect(x, y, width, height);

  // Draw focus ring, if appropriate
  ctx.drawFocusIfNeeded(el);
}