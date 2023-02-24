const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');



document.addEventListener('DOMContentLoaded',()=>{ //primero carga el archivo html luego ejecuta la funcion
        mostrarMenu();
        cerrarMenu();
});


function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{  //realiza un evento
        navegacion.classList.toggle('ocultar'); //toggle quita el elemento que tiene la clase navegacion (ocultar)
    });
}


function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', (e)=>{
            
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
            
        });
    });

}