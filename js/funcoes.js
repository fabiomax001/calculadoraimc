function calcular() {
    console.log("incio");
    event.preventDefault();
    altura = document.getElementById("altura").value;
    peso = document.getElementById("peso").value;
    resultado = peso / (altura * altura);
    resultado = resultado.toFixed(2);
    console.log(peso);
    console.log(altura);
    console.log(resultado);
    //if(resultado) alert(resultado)
    if (!isNaN(resultado)) {
        if (resultado < 18.5) {
            resultado = resultado.toString()
            resultado = resultado.replace(".", ",");
                document
                .getElementById("mostra-resultado")
                .innerHTML = "Resultado:<br>" +
                resultado + "<br>" +
                "Abaixo do peso";  
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            resultado = resultado.toString()
            resultado = resultado.replace(".", ",");
                document
                .getElementById("mostra-resultado")
                .innerHTML = "Resultado:<br>" +
                resultado + "<br>" +
                "Peso normal<br>" +
                "Parabéns!!!";  
        } else if (resultado >= 25.0 && resultado < 29.9) {
            resultado = resultado.toString()
            resultado = resultado.replace(".", ",");
                document
                .getElementById("mostra-resultado")
                .innerHTML = "Resultado:<br>" +
                resultado + "<br>" +
                "Pré-obesidade";  
        } else if (resultado >= 30.0 && resultado < 34.9) {
            resultado = resultado.toString()
            resultado = resultado.replace(".", ",");
                document
                .getElementById("mostra-resultado")
                .innerHTML = "Resultado:<br>" +
                resultado + "<br>" +
                "Obesidade<br>" +
                "Grau 1";  
        } else if (resultado >= 35.0 && resultado < 39.9) {
            resultado = resultado.toString()
            resultado = resultado.replace(".", ",");
                document
                .getElementById("mostra-resultado")
                .innerHTML = "Resultado:<br>" +
                resultado + "<br>" +
                "Obesidade<br>" +
                "Grau 2";   
        } else if (resultado >= 40.0) {
            resultado = resultado.toString()
            resultado = resultado.replace(".", ",");
                document
                .getElementById("mostra-resultado")
                .innerHTML = "Resultado:<br>" +
                resultado + "<br>" +
                "Obesidade<br>" +
                "Grau 3";   
        }

    }
    console.log("fim");
}/*
Menor que 18.5 - Abaixo do peso ;
Entre 18.5 e 24.9 - Peso normal ;
Entre 25.0 e 29.9 - Pré-obesidade ;
Entre 30.0 e 34.9 - Obesidade Grau 1 ;
Entre 35.0 e 39.9 - Obesidade Grau 2 ;
Acima de 40 - Obesidade Grau 3*/