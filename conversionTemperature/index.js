const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const reamur = document.getElementById("reamur");
const kelvin = document.getElementById("kelvin")
const inputs = document.getElementsByClassName("inputs");

for(let i=0; i < inputs.length;i++){
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fahrenheit.value = (9 * value / 5) + 32;
                reamur.value = 4/5 * value;
                kelvin.value = value + 273.15;
                break;
            case "fahrenheit":
                celcius.value = 9 * (value + 32) / 9;
                reamur.value = 4 * (value - 32)/9;
                kelvin.value = (value - 32) * 5 / 9 + 273.15;
                break;
            case "reamur":
                fahrenheit.value = 4* (value + 32)/4 ;
                celcius.value = 5* value/4 ;
                kelvin.value = 5 * value / 4 + 273.15;
                break;
        }
    });
}

console.log("hello world")