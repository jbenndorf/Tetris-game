let step = 1;
let cube = document.getElementsByClassName('cube')[0];
let arrowRight = document.getElementsByClassName('arrow-right')[0];
let arrowLeft = document.getElementsByClassName('arrow-left')[0];
let playField = document.getElementsByClassName('playfield')[0];
let moveLeft = () => move('left');
let moveRight = () => move('right');

function startGame(){
   cube.style.opacity = '1';
   arrowLeft.addEventListener('click', moveLeft);
   arrowRight.addEventListener('click', moveRight);
   //window.requestAnimationFrame(descend);
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

function descend(timestamp) {
    ypos = ypos + 5;
    cube.style.transform = `translateY(${ypos}px)`;
    console.log(cube.getBoundingClientRect());

    //if(){
    //    requestAnimationFrame(descend);
    //}
}

function reset(){
    arrowLeft.removeEventListener('click', moveLeft);
    arrowRight.removeEventListener('click', moveRight);
    cube.style.opacity = '0';
    cube.style.transform = 'translate(0,0)';
    step = 1;
}