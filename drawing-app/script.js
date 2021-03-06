const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeElem = document.getElementById('size');
const clearBtn = document.getElementById('clear');
const colorElem = document.getElementById('color')
const ctx = canvas.getContext('2d');

let size = 15;
let isPressed = false;
let color = 'black'
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
    if (size < 50) {
        size += 1;
    }
    updateSize();
})

decreaseBtn.addEventListener('click', () => {
    if (size > 1) {
        size -= 1;
    }
    updateSize();
})

function updateSize() {
    sizeElem.innerText = size;
}

updateSize();

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})


colorElem.addEventListener('change', (e)=>{
    color = e.target.value;
})