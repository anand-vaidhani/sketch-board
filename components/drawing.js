let pencilColor = "#000000";
let eraserWidth = 10;
let earaserMaxWidth = 40;
const canvas = document.getElementById('canvas-drawing');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const ctx = canvas.getContext('2d');

function drawLine(e) {
    const x = e.clientX;
    const y = e.clientY;
    ctx.lineTo(x, y);
    ctx.stroke();
}

export function initiateColors() {
    const colors = document.getElementsByClassName("color");
    for (let index = 0; index < colors.length; index++) {
        const element = colors[index];
        element.addEventListener('click', function () {
            pencilColor = element.getAttribute("data-color");
        })
    }
}

function activatePencil(e) {
    canvas.removeEventListener("mousedown", activateEraser);
    ctx.moveTo(e.clientX, e.clientY);
    ctx.beginPath();
    ctx.lineWidth = 5
    ctx.strokeStyle = pencilColor;
    canvas.addEventListener('mousemove', drawLine);
}

export function initiateDraw(e) {
    canvas.addEventListener('mousedown', activatePencil);

    canvas.addEventListener('mouseup', function (e) {
        canvas.removeEventListener('mousemove', drawLine);
        canvas.removeEventListener("mousedown", activatePencil);
    });
}

function activateEraser(e) {
    canvas.removeEventListener("mousedown", activatePencil);
    ctx.moveTo(e.clientX, e.clientY);
    ctx.beginPath();
    ctx.lineWidth = eraserWidth
    ctx.strokeStyle = "#ffffff";
    canvas.addEventListener('mousemove', drawLine);
}

export function initiateErase(e) {
    canvas.addEventListener('mousedown', activateEraser);
    canvas.addEventListener('mouseup', function (e) {
        canvas.removeEventListener('mousemove', drawLine);
        canvas.removeEventListener('mousedown', activateEraser);
    });
}

export function initiateEraserControl() {
    const slider = document.getElementById('eraser-slider');
    slider.onchange = function(e) {
        eraserWidth = e.target.value;
    }
}