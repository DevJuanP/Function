
//CORRE EL PROGRAMA CON 'npm run fn'


const y = (x) =>{
    return ((x-2)*(x)*(x+2)/(2 * x + 3));
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askQuestion() {
    rl.question("Ingrese un valor para x: ", (input) => {
        if(input.trim().toLowerCase() === 'exit') {
            console.log("Saliendo del programa...");
            rl.close();
            return;
        }
        let x = parseFloat(input);
        if (isNaN(x)) {
            console.log("Por favor, ingrese un número válido.");
        } else {
            let result = y(x);
            console.log(`El resultado de la función y(${x}) es: ${result}`);
            
            if (result > 0) {
                console.log("La función es positiva.");
            } else if (result < 0) {
                console.log("La función es negativa.");
            } else {
                console.log("La función es cero.");
            }
        }
        askQuestion(); // Recursively call to continue the loop
    });
}

askQuestion(); // Start the recursive loop
