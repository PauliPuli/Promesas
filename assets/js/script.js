// const urlApi='https://jsonplaceholder.typicode.com/photos';
// fetch(urlApi).then(Response)=>{
//     Response.json().then((data))=>{
//         console.log.data
//     };
// };


async function cargarDatos(){
    try{
        let data= await fetch('https://jsonplaceholder.typicode.com/photos');
        let respuesta= await data.json();
        respuesta.forEach(element => {
            if(element.id <=20)
                console.log(`${element.id} | ${element.title} | ${element.url} | ${element.thumbnailUrl}`);
            
        });
    } catch (e){
        console.log(e)
    }
}
cargarDatos();
setTimeout(()=> {
    const promise = new Promise((resolve, reject) => {
        const value = true;
        value ? resolve('Información enviada') : reject('Rechazado')
        })
        promise.then(resp => console.log(resp))
},3000)



//1)Crear una función asíncrona para obtener los datos de la URL.//

//2)Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await para recibir el valor directamente de la promesa

//3)Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await para recibir el valor directamente de la promesa.  
//4)Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos. 
//5)Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”. 
//6) Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.  
