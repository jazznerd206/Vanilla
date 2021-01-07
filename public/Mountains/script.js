mountains = document.createElement('div')
mountains.setAttribute('class', 'mountains')
mountains.setAttribute('id', 'mountains')
mountains.setAttribute('style', 'height:100px;width:100px;background:red')
document.body.appendChild(mountains)


function Mountains(height, speed, variance, color) {
    this.height = height;
    this.speed = speed;
    this.varianvce = variance;
    this.color = color;
}

let mountainRow = new Mountains(100,5,50,'black');

console.log(mountainRow)