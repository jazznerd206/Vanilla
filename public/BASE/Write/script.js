window.onload = () => {        
    const canvas = document.querySelector('#draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    let dashLen = 220;
    let dashOffset = dashLen;
    let speed = 5;
    let txt = ["Andrew Miller", "full stack"];
    let x = 30;
    let i = 0;

    ctx.strokeStyle = '#BADA55';
    ctx.fillStyle = 'red';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctx.font = "50px Rock Salt"; 
    ctx.lineWidth = 15;
    ctx.lineJoin = "round";
    ctx.globalAlpha = 2/3;
    ctx.strokeStyle = ctx.fillStyle = "red";

    txt.forEach(word => {
        (function loop() {
            ctx.clearRect(x, 0, 60, 150);
            ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
            dashOffset -= speed;                                         // reduce dash length
            ctx.strokeText(word[i], x, 90);                               // stroke letter
        
            if (dashOffset > 0) requestAnimationFrame(loop);             // animate
            else {
            ctx.fillText(word[i], x, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(word[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < word.length) requestAnimationFrame(loop);
            }
    })();
})}


