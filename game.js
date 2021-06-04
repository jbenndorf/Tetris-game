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