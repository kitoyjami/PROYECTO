var colors =require('colors');

function sumar(x,y){
    let suma = x+y;
    console.log("La suma es: ".green + suma)

}

sumar(5,8)

for ( let i=0; i<5 ; i++)
{
    console.log("Hola Mundo".red)
}
for ( let j=0; j<5 ; j++)
{
    console.log( `Tabla de multiplicar ${j}*3`.blue +" "+ j*3)
}
for ( let j=0; j<5 ; j++)
{
    console.log( `Tabla de multiplicar ${j}*4`.blue +" "+ j*4)
}