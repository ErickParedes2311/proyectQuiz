// {
//         const inicio = document.querySelector('.inicio');
//         const quiz = document.querySelector('.content_quiz');
//         const boton = document.querySelector('.boton_comenzar');
//         const volverInicio = document.querySelector('.volver_inicio');
        
//         boton.addEventListener('click', () =>
//         {
//                 inicio.style.display = 'none'; 
//                 volverInicio.style.display = 'inline'; 
//                 quiz.style.display = 'inline';  
//         });
        
//         volverInicio.addEventListener('click', () =>
//         {
//                 volverInicio.style.display = 'none';
//                 inicio.style.display = 'inline'; 
//                 quiz.style.display = 'none';  
//         });
// }

// @ts-check
import { recorrer } from "./Datos.js";
import {Contadorjuego} from "./Contadores.js";

function main()
{
        const game = new Contadorjuego(recorrer);
        console.log(game)
}
main();