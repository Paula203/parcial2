const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const R=Math.floor = (Math.random()*100) +150;
const r=Math.floor = (Math.random()*7) +4;
const d=Math.floor = (Math.random()*5) +3;
 
//la funcion obligatoria que puso el profe 
function plotPixel(ctx, x, y,color="000") {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), 1, 1);
}
