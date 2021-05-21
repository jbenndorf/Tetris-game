let start;


function startGame(){
   let cube = document.getElementsByClassName('cube')[0];
   let arrowRight = document.getElementsByClassName('arrow-right')[0];
   let arrowLeft = document.getElementsByClassName('arrow-left')[0];
   let step = 1;

   cube.style.opacity = '1';
   arrowRight.addEventListener('click', function() {
   for (let i = 0; i < 10; i++) {
        cube.style.transform = 'translateX(' + step * 20 + 'px)';
   }
    step++;
    });
    arrowLeft.addEventListener('click', function() {
        for (let i = 0; i < 10; i++) {
            cube.style.transform = 'translateX(' + step * -20 + 'px)';
        }
        step++;
    });
   //window.requestAnimationFrame(descend);
}

function descend(timestamp) {
    let cube = document.getElementsByClassName('cube')[0];

    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;

    // `Math.min()` is used here to make sure that the element stops at exactly 200px.
    cube.style.transform = 'translateY(' + Math.min(0.1 * elapsed, 500) + 'px)';

    if (elapsed < 4000) { // Stop the animation after 2 seconds
        window.requestAnimationFrame(descend);
    }
}