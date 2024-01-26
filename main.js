const calcular = document.getElementById('calcular')

function imc (){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
        if( nome !== '' && altura !== '' && peso !== ''){
            const valorIMC = (peso / (altura*altura)).toFixed(2);
            let classificacao = '';
        if(valorIMC< 18.5){
            classificacao = 'Abaixo do peso';
        }else if(valorIMC<25){
            classificacao = 'com o peso ideal';
        }
        else if(valorIMC>30){
            classificacao = 'Acima do peso.';
        }
        resultado.textContent = '${nome} seu IMC é ${valorIMC} e você está ${classificacao}' ;

        }
        
        
        

}




calcular.addEventListener(click, imc)