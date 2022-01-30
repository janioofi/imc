function calcular(){
    let nome = document.getElementById("nome")
    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso")
    let resultado = document.getElementById("resultado")
    let alt = Number(altura.value)
    let pes = Number(peso.value)
    let name = String(nome.value)

    if(alt == 0 || pes == 0 || name == ""){
        window.alert("Não é possível calcular!")
    }else{
        let res = pes / (alt * alt)
        if(res < 18.5){
            resultado.innerHTML =  `Olá <strong>${name}</strong><p>O seu IMC é: <strong>${res.toFixed(1)}</strong></p> <p>Situação:  <strong>MAGREZA</strong></p>`
        }else if(res >= 18.6 && res < 24.8){
            resultado.innerHTML =  `Olá <strong>${name}</strong><p>O seu IMC é: <strong>${res.toFixed(1)}</strong></p> <p>Situação: <strong>NORMAL</strong></p>`
        }else if(res >= 24.9 && res < 30){
            resultado.innerHTML =  `Olá <strong>${name}</strong><p>O seu IMC é: <strong>${res.toFixed(1)}</strong></p> <p>Situação: <strong>SOBREPESO</strong></p>`
        }else{
            resultado.innerHTML =  `Olá <strong>${name}</strong><p>O seu IMC é: <strong>${res.toFixed(1)}</strong></p> <p>Situação: <strong>OBESIDADE</strong></p>`
        }
    }
}