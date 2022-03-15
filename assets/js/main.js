const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const p = document.getElementsByTagName('p')[0];


let xc = 200, yc = 400, xb = xc - 2.5, yb = yc - 50, xt = 100, yt = 50;
let counter = 0;


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


let randomTarget = () => {
    xt = Math.floor(Math.random() * 401);
    yt = Math.floor(Math.random() * 51);

    drawTarget(xt, yt);
}


let displayTarget = () => {
    randomTarget();
};


let game = () => {
    ctx.fillStyle = "black";

    // cannon
    drawCannon(xc, yc);

    // bullet
    yb -= 3;
    drawBullet(xb, yb);

    if(yb < -18){
        ctx.clearRect(0, -50, 400, 50);
        yb = yc - 50
        xb = xc - 2.5;
        drawBullet(xb, yb);
    }

    // target
    drawTarget(xt, yt);
};


let update = () => {
    ctx.clearRect(0, 0, 400, 400);
    game();
    window.requestAnimationFrame(update);
};

update();


document.addEventListener('keydown', (e) => {
    let key = e.key;

    if(key == 'ArrowRight'){
        if(xc >= 380){
            xc = 380;
        }

        xc += 1.5;
        drawCannon(xc, yc);
    }

    if(key == 'ArrowLeft'){

        if(xc <= 20){
            xc = 20;
        }

        xc -= 1.5;
        drawCannon(xc, yc);
    }
});