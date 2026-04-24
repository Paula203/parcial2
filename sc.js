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

function midpoint(cx, cy, r,color="999") {
    let x = 0;
    let y = r;
    let d = 1 - r; 

    while (x <= y) {
        plotPixel(ctx, cx + x, cy + y,color);
        plotPixel(ctx, cx - x, cy + y,color);
        plotPixel(ctx, cx + x, cy - y,color);
        plotPixel(ctx, cx - x, cy - y,color);
        plotPixel(ctx, cx + y, cy + x,color);
        plotPixel(ctx, cx - y, cy + x,color);
        plotPixel(ctx, cx + y, cy - x,color);
        plotPixel(ctx, cx - y, cy - x,color);

        x++; 
        if (d < 0) {
            d = d + 2 * x + 1; 
        }   else {  
            y--;
            d =d+ 2 * (x - y) + 1; 
        }
    }
}

function getOrbitalPosition(cx, cy, R, r, d, t) {
    const x = cx + (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
    const y = cy + (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    return { x, y };
}
