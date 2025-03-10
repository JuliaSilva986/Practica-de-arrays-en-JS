//Ejercicios leccion "Ciclo while en JavaScript"

//Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.

let contador=10;

while (contador>0){
    console.log(contador);
    contador--;
}

//Modifica el ciclo para que imprima solo los números pares.

let nuevoContador=10;

while (nuevoContador>0){
    if (nuevoContador%2===0){ 
        console.log(nuevoContador);
    }
    nuevoContador--;
}

//Ejercicios leccion "Ciclo for en JavaScript"

//Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.

for (let i=10; i>0; i--){
    console.log(i);
}
//Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.

let suma=0;

for (let i=1; i<=20; i++){
    if (i%2===0){  //Usando if
        suma+=i;
    }
}

console.log("la suma de los numeros pares del 1 al 20 es: ", suma);

let nuevaSuma=0;

for (let i=2; i<=20; i+=2){
    nuevaSuma+=i;  //Usando unicamente ciclo for
}

console.log("la suma de los numeros pares del 1 al 20 es: ", nuevaSuma);

//Ejercicio leccion "Arrays (arreglos) en JavaScript"

let colores = ['rojo', 'verde', 'azul', 'amarillo'];
console.log(colores[1]); // Imprime: verde
colores[2] = 'naranja'; // Cambia 'azul' a 'naranja'
colores.push('violeta'); // Añade 'violeta' al final del array
colores.shift(); // Elimina el primer elemento del array ('rojo')
console.log(colores);