function add() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    
    const suma = processAdd(numero1, numero2);
    
    showResult(suma);
}

function processAdd(a, b) {
    return a + b;
}

function showResult(result) {
    alert(result);
}

module.exports = { add };
