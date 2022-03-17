const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const p = document.getElementsByTagName('p')[0];

const btn_start = document.getElementById('start');
const btn_restart = document.getElementById('restart');
console.log(btn_restart);

let xc = 200, yc = 400, xb = xc - 2.5, yb = yc - 50, xt = 100, yt = 50;
let counter = 0;
let condition = false;
let keyCondition = false;


canvas.width = 400;
canvas.height = 400;
p.textContent = `You hit ${counter} / 10 target(s)`;


let drawCannon = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);      // xpos, ypos
    ctx.fill();
};


let drawBullet = (x, y) => {
    ctx.beginPath();
    ctx.rect(x, y, 5, 15);     // xpos - 2.5, ypos, with, height
    ctx.stroke();
};


let drawTarget = (x, y) => {
    ctx.beginPath();
    ctx.moveTo(x, y);    // x, y
    ctx.lineTo(x - 10, y - 25);     // x - 10, y -25
    ctx.lineTo(x + 10, y - 25);    // x + 10, y - 25
    ctx.lineTo(x, y);    // x, y
    ctx.fill();
};


let game = () => {
    ctx.fillStyle = "black";

    // cannon
    drawCannon(xc, yc);

    // bullet
    if(condition){
        yb -= 4;
        drawBullet(xb, yb);
    }

    if(yb < -18){
        condition = false;
        ctx.clearRect(0, -50, 400, 50);
        yb = yc - 50
        xb = xc - 2.5;
        drawBullet(xb, yb);
    }

    // target
    if((xt -15 <= xb) && (xb <= xt + 10)){
        if(yb < yt){
            counter++;
            p.textContent = `You hit ${counter} / 10 target(s)`;

            if(counter >= 10){
                console.log('you win');
                p.textContent = `You win`;
            }

            ctx.clearRect(0, 0, 400, 50);
         
            xt = Math.floor((Math.random() * 370) + 20);  
            yt = Math.floor((Math.random() * 35) + 30);
        }
    }

    drawTarget(xt, yt);
};


let update = () => {
    ctx.clearRect(0, 0, 400, 400);
    game();
    window.requestAnimationFrame(update);
};


update();


let onKeyDown = (e) => {
    let key = e.key;
    let ascii = key.charCodeAt();

    if(key == 'ArrowRight'){
        if(xc >= 380){
            xc = 380;
        }

        xc += 3;
        drawCannon(xc, yc);
    }

    if(key == 'ArrowLeft'){

        if(xc <= 20){
            xc = 20;
        }

        xc -= 3;
        drawCannon(xc, yc);
    }

    if(ascii === 32){
        console.log('spacebar'); 
        condition = true;
        yb = yc - 50
        xb = xc - 2.5;
        console.log(xb);
    }
};


document.removeEventListener('keydown', onKeyDown, true);


btn_start.addEventListener('click', () => {
    console.log('btn start ok');

    document.addEventListener('keydown', onKeyDown, true);

    btn_restart.removeAttribute('class', 'hide');
    btn_start.setAttribute('class', 'hide');    
});

btn_restart.addEventListener('click', () => {document.location.reload()});