let pencilColor = "#000000";
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
        element.addEventListener('click', function() {
            pencilColor = element.getAttribute("data-color");
        })
    }
}

export function initiateDraw(e) {
    canvas.addEventListener('mousedown', function (e) {
        ctx.moveTo(e.clientX, e.clientY);
        ctx.beginPath();
        ctx.strokeStyle = pencilColor;
        canvas.addEventListener('mousemove', drawLine);
    });

    canvas.addEventListener('mouseup', function (e) {
        canvas.removeEventListener('mousemove', drawLine);
    });
}