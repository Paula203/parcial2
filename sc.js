  /**
     * Universidad - Facultad de Ingeniería
     * Asignatura: Introducción a la Computación Gráfica
     * Parcial 2: Sistema de Dispersión Geométrica Orbital
     *
     * Algoritmos implementados:
     *   - Punto Medio para Circunferencias (órbita)
     *   - Bresenham para Líneas (lados de polígonos)
     */
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
function getOrbitalPosition(r, n) {
    let position = [];  
    for (let i = 0; i < n; i++) {
        let angle = (2 * Math.PI / n) *i; 
        let x = centerX + r * Math.cos(angle);
        let y = centerY + r * Math.sin(angle);
        position.push({ x, y });
    }
    return position;
}
 function getPolygonVertices(cx, cy, radius, sides) {
    let vertices = [];
    for (let i = 0; i < sides; i++) {
        let angle = (2 * Math.PI / sides) * i;
        let x = cx + radius * Math.cos(angle);
        let y = cy + radius * Math.sin(angle);
        vertices.push({ x, y });
    }
    //se implementa ek algoritmo de bresenham para dibujar las lineas entre los vertices del poligono
    function Bresenham(x0, y0, x1, y1,color="999") {
        let dx = Math.abs(x1 - x0);
        let dy = Math.abs(y1 - y0);
        let sx = (x0 < x1) ? 1 : -1;
        let sy = (y0 < y1) ? 1 : -1;
        let err = dx - dy;
         while (true) {
            plotPixel(ctx, x0, y0,color);
            if (x0 === x1 && y0 === y1) break;
            let err2 = err * 2; 
            if (err2 > -dy) {
                err -= dy;
                x0 += sx;
            }
            if (err2 < dx) {
                err += dx;
                y0 += sy;
            }
        }
