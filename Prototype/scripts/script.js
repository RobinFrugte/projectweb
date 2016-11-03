/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var save = document.getElementById("save");
var save1 = document.getElementById("save1");
var close = document.getElementById("close");


function test() {
    document.getElementById("overlay").style.display = 'none';
}

function popup() {
    document.getElementById("overlay").style.display = 'block';
}


test();

save.addEventListener('click', popup);
save1.addEventListener('click', popup);
close.addEventListener('click', test);