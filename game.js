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

function startGame(){
   cube.style.opacity = '1';
   arrowLeft.addEventListener('click', moveLeft);
   arrowRight.addEventListener('click', moveRight);
   animationId = window.requestAnimationFrame(descend);
}
function move (direction){
    let cubeDims = cube.getBoundingClientRect();
    let playFieldDims = playField.getBoundingClientRect();

    if (direction === 'left' && cubeDims.x > playFieldDims.x){
        step --;
        cube.style.transform = 'translateX('+step * 20 +'px)';
    } else if (direction === 'right' && (cubeDims.x + cubeDims.width) < (playFieldDims.x + playFieldDims.width))  {
        step ++;
        cube.style.transform = 'translateX('+step * 20 +'px)';
    } else {
        return;
    }
}

function descend() {
    console.log('we are moving down');
    yDescend = yDescend + 1;
    cube.style.transform = `translateY(${yDescend}px)`;

    if(yDescend < 40){
        animationId = requestAnimationFrame(descend);
    }
}

function reset(){
    arrowLeft.removeEventListener('click', moveLeft);
    arrowRight.removeEventListener('click', moveRight);
    window.cancelAnimationFrame(animationId);
    cube.style.opacity = '0';
    cube.style.transform = 'translate(0,0)';
    step = 1;
    yDescend = 0;
}