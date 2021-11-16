const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    
    if(nome !== "" && altura  !== "" && peso !== ""){
        const valorImc =  (peso / (altura * altura)).toFixed(0);

        resultado.textContent = valorImc;

        let classificacao = '';
    
    if( valorImc < 18){
        classificacao = "abaixo do peso";
    } 
    else if(valorImc < 24) {
        classificacao = "no seu peso ideal, Parabéns!!!";
    }
    else if(valorImc < 25){
        classificacao = "na obesidade I"
    }
    else if(valorImc < 30){
        classificacao = "na obesidade II"
    }
    else if(valorImc < 40){
        classificacao = "na obesidade III"
    }
     else{
        classificacao = "Preencha todos os campos!!";
    }
    resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;
}

}

calcular.addEventListener('click', imc);