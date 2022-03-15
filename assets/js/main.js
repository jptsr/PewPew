const main = document.getElementsByTagName('main')[0];
const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const btn_start = document.getElementsByTagName('button')[0];

const cannon = new Image();
cannon.src = '../image/canon.png';

// console.log(btn_start);
// console.log(main);
// console.log(canvas);


// CANVAS

let drawIntro = () => {
    ctx.fillStyle = "1b1b1b";

    ctx.beginPath();
    ctx.arc(200, 200, 130, 0, 2 * Math.PI);
    ctx.stroke();
};

// drawIntro();


// CLEAR CANVAS
let clearCanvas = () => {ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)};


// DRAW THE GAME
// let init = () => {
    
//     window.requestAnimationFrame(game);
// }


let game = () => {
    console.log('game function is ok');
    ctx.drawImage(cannon,0,0,210,260);
}

game();


btn_start.addEventListener('click', () => {
    console.log('listener is listening');
    // clearCanvas();
    // draw();
});


// let draw = () => {
//     ctx.fillStyle = "#000000";

//     // Bas du canon p1
//     ctx.beginPath();
//     ctx.moveTo(198, 400);
//     ctx.lineTo(202, 400);
//     ctx.lineTo(202, 395);
//     ctx.lineTo(208, 395);
//     ctx.lineTo(208, 390);
//     ctx.lineTo(192, 390);
//     ctx.lineTo(192, 395);
//     ctx.lineTo(198, 395);
//     ctx.lineTo(198, 400);
//     ctx.stroke();

//     // Bas du canon p2
//     ctx.beginPath();
//     ctx.moveTo(208, 390);
//     ctx.lineTo(214,390);
//     ctx.lineTo(214, 385);
//     ctx.lineTo(218, 385);
//     ctx.lineTo(218, 370);
//     ctx.lineTo(182, 370);
//     ctx.lineTo(182, 385);
//     ctx.lineTo(186, 385);
//     ctx.lineTo(186, 390);
//     ctx.lineTo(192, 390);
//     ctx.stroke();

//     // allonge du canon
//     ctx.beginPath();
//     ctx.moveTo(216, 370);
//     ctx.lineTo(216, 355);
//     ctx.lineTo(212, 355);
//     ctx.lineTo(212, 320);
//     ctx.lineTo(214, 320);
//     ctx.lineTo(214, 318);
//     ctx.lineTo(186, 318);
//     ctx.lineTo(186, 320);
//     ctx.lineTo(188, 320);
//     ctx.lineTo(188, 355);
//     ctx.lineTo(184, 355);
//     ctx.lineTo(184, 370);
//     ctx.stroke();

//     // côté gauche
//     ctx.beginPath();
//     ctx.moveTo(182, 390);
//     ctx.lineTo(182, 365);
//     ctx.lineTo(172, 365);
//     ctx.lineTo(172, 390);
//     ctx.lineTo(182, 390);
//     ctx.stroke();


//     // côté droit
//     ctx.beginPath();
//     ctx.moveTo(218, 390);
//     ctx.lineTo(218, 365);
//     ctx.lineTo(228, 365);
//     ctx.lineTo(228, 390);
//     ctx.lineTo(218, 390);
//     ctx.stroke();


//     ctx.lineJoin = "round";
//     ctx.lineCap = "round";
// };