// Instrucciones para resolver el problema:

/*
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).

*/

let frutas=["manzana", "pera", "pera", "platano", "manzana", "piña", "pera", "piña", "sandia"];

let cantidadFrutas={
    "manzana":0,
    "pera":0,
    "platano":0,
    "piña":0,
    "sandia":0
};

// usando ciclo for

for (let i=0; i<frutas.length; i++){
    if (frutas[i]==="manzana"){
        cantidadFrutas.manzana++;
    } else if (frutas[i]==="pera"){
        cantidadFrutas.pera++;
    } else if (frutas[i]==="platano"){
        cantidadFrutas.platano++;
    } else if (frutas[i]==="piña"){
        cantidadFrutas.piña++;
    } else {
        cantidadFrutas.sandia++;
    }
}

console.log(cantidadFrutas)

//usando while

let cantidadFrutas2={
    "manzana":0,
    "pera":0,
    "platano":0,
    "piña":0,
    "sandia":0
}

let contador=0;

while (contador< frutas.length){
    if (frutas[contador]==="manzana"){
        cantidadFrutas2.manzana++;
    } else if (frutas[contador]==="pera"){
        cantidadFrutas2.pera++;
    } else if (frutas[contador]==="platano"){
        cantidadFrutas2.platano++;
    } else if (frutas[contador]==="piña"){
        cantidadFrutas2.piña++;
    } else {
        cantidadFrutas2.sandia++;
    }
    contador++;
}

console.log(cantidadFrutas2);