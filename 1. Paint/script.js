const canvas = document.querySelector('canvas');
const incButt = document.querySelector('.fa-plus');
const decButt = document.querySelector('.fa-minus');
const sizeButt = document.querySelector('.size');
const colorButt = document.querySelector('.color');
const clearButt = document.querySelector('.fa-eraser');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let x; let y;

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true
    x = e.offsetX;
    y = e.offsetY;
})
document.addEventListener('mouseup',(e) =>{
    isPressed = false;
    x = undefined;
    y = undefined;
})
canvas.addEventListener('mousemove',(e)=>{
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x ,y, size,0 ,Math.PI * 2);
    ctx.fillStyle = colorButt.value;
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = colorButt.value;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
incButt.addEventListener('click',()=>{
    size += 5
    if(size > 50) size = 50;
    sizeButt.innerText = size;
})
decButt.addEventListener('click',()=>{
    size -= 5
    if(size < 5) size = 5;
    sizeButt.innerText = size;
})
clearButt.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})