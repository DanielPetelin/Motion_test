var block = document.getElementById('test');
var left = 0;
var top = 0;

document.onkeydown = function (event) {
    console.log(event);
    if (event.key == 'ArrowRight') {
        block.style.left = left + 'px';
        left++;
    }

    if (event.key == 'ArrowDown') {
        block.style.top = top + 'px';
        top++;
    }
}