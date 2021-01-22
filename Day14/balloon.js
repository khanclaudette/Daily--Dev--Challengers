let balloon = document.querySelector('#balloons')
balloon.addEventListener('mouseover', (ball)=>{
    ball.preventDefault();

    balloon.style.color = 'red';
    balloon.style.fontSize = '20%';
})
balloon.addEventListener('mouseleave', leave);
function leave(ev){
    ev.preventDefault();
    balloon.style.color = 'red';
    balloon.style.fontSize = '60px'
}