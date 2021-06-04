function startGame(){
   arrowLeft.addEventListener('click', moveLeft);
   arrowRight.addEventListener('click', moveRight);
   animationId = window.requestAnimationFrame(descend);
}
function move (){
    return null;
}

function descend() {
    return null;
}

function reset(){
    arrowLeft.removeEventListener('click', moveLeft);
    arrowRight.removeEventListener('click', moveRight);
    window.cancelAnimationFrame(animationId);
}