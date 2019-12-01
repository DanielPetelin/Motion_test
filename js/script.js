var block = document.getElementById('test');
var left = 0;
var top1 = 0;
var down1 = 0;

document.onkeydown = function (event) {
    console.log(event);
    if (event.key == 'ArrowRight') {
        block.style.left = left + 'px';
        left++;
    }

    if (event.key == 'ArrowDown') {
        block.style.top = top1 + 'px';
        top1++;
    }

    if (event.key == 'ArrowUp') {
        block.style.up = down1 + 'px';
        down1++;
    }
}