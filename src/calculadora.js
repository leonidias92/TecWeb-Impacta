function preencher(valor){
    document.getElementById("resultado").value += valor;
}

function calcular(){
    var resultado = 0;
    resultado = document.getElementById("resultado").value;

    document.getElementById('resultado').value = '';

    var primeiro_carac = resultado.substring(1,0);
        if (primeiro_carac=="/" || primeiro_carac=="*" || primeiro_carac=="+"){
        alert("Um operador não pode ser adicionado antes dos números! Digite novamente a operacao!");
    }
    else{
    document.getElementById('resultado').value = eval(resultado);
    }
    window.onerror = function(msg) {
        alert(msg);
    }
}
