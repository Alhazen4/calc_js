function insert(num) {
    document.getElementById('textview').value += num;   
}

function clr() {
    document.getElementById('textview').value = '';   
}

function count() {
    var calc = document.getElementById('textview').value;
    document.getElementById('textview').value = eval(calc);
}

function backspace() {
    var val = document.getElementById('textview').value;
    document.getElementById('textview').value = val.substring(0, val.length - 1);
}