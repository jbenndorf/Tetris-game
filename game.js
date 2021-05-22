let step = 1;
let cube = document.getElementsByClassName('cube')[0];
let arrowRight = document.getElementsByClassName('arrow-right')[0];
let arrowLeft = document.getElementsByClassName('arrow-left')[0];
let game = document.getElementsByClassName('rectangle')[0];

function startGame(){
   cube.style.opacity = '1';
   arrowLeft.addEventListener('click', evt => move('left'));
   arrowRight.addEventListener('click', evt => move('right'));
   //window.requestAnimationFrame(descend);
}
function move (direction){
    let cubeDimensions = cube.getBoundingClientRect();
    let gameDimensions = game.getBoundingClientRect();

    if (direction === 'left' && cubeDimensions.x > gameDimensions.x){
        step --;
        cube.style.transform = 'translateX('+step * 20 +'px)';
    } else if (direction === 'right' && (cubeDimensions.x + cubeDimensions.width) < (gameDimensions.x + gameDimensions.width))  {
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
    document.location.href='';
}