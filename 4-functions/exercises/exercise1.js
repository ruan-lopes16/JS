let temperature = parseFloat(prompt("Enter the temperature °C: "))

const scale = prompt("Enter the scale: Fahrenheit (F) or Kelvin (K) ")

/*
switch(scale){
    case "Fahrenheit": 
        let F = (temperature * 9 / 5) + 32
        alert(`Temperature in Fahrenheit: ${F}F`)
        break

    case "Kelvin": 
        let K = (temperature + 273.15)
        alert(`Temperature in Kelvin: ${K}K`)
        break

    default:
        alert("Invalid scale entered. Please use 'Fahrenheit' or 'Kelvin'.")
}
*/

const convertedTemperature = () => {
    if(isNaN(temperature)){     // temperatura não é um numero?
        alert("The past element is not a number.")
        return                  // para execução
    }

    if(!scale){                 // cancelou ou deixou vazio
        alert("No scale was provided for calculation.")
        return                  // para execução
    }        
    
    // fará o calculo e exibirá se entrar na condição
    if(scale === "K"){
        const K = (temperature + 273.15)
        alert(`Temperature in Kelvin: ${K}K`)

    } else if(scale === "F"){
        const F = (temperature * 9 / 5) + 32
        alert(`Temperature in Fahrenheit: ${F}F`)

    } else {
        alert("Invalid scale. Please use F for 'Fahrenheit' or K for 'Kelvin'.")

    }
}

convertedTemperature()