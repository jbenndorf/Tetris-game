let step = 1;
let yDescend = 0;
const cube = document.getElementsByClassName('cube')[0];
const arrowRight = document.getElementsByClassName('arrow-right')[0];
const arrowLeft = document.getElementsByClassName('arrow-left')[0];
const playField = document.getElementsByClassName('playfield')[0];
const moveLeft = () => move('left');
const moveRight = () => move('right');
let animationId = null;

let arrayHeight = 20;
let arrayWidth = 12;
let playFieldArray = [...Array(arrayHeight)].map(() => Array(arrayWidth).fill(0));
let basicTetromino = [[1,0], [0,1], [1,1], [2,1]];