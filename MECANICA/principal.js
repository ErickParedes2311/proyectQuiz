{
        const inicio = document.querySelector('.inicio');
        const quiz = document.querySelector('.content_quiz');
        const boton = document.querySelector('.boton_comenzar');
        const volverInicio = document.querySelector('.volver_inicio');
        
        boton.addEventListener('click', () =>
        {
                inicio.style.display = 'none'; 
                volverInicio.style.display = 'inline'; 
                quiz.style.display = 'inline';  
        });
        
        volverInicio.addEventListener('click', () =>
        {
                location.reload(true);
        });
}

// @ts-check
import { recorrer } from "./Datos.js";
import {Contadorjuego} from "./Contadores.js";
import {UI} from "./UI.js";


/**
 * 
 * @param {Contadorjuego} game objeto del contador 
 * @param {UI} ui objeto del ui
 */
const renderisado = (game, ui) =>
{
        // hacemos esto para que pase de pregunta  llamamos de nuevo
        if(game.final())
        {
                ui.mostrarPuntaje(game.puntuacion);
        }else
        {
                ui.mostrarPregunta(game.preguntActual().pregunta);
                ui.mostrarOpciones(game.preguntActual().opciones, (x) => 
                {
                        game.contadorRespuesta(x);
                        renderisado(game, ui);
                });
                ui.mostrarProgreso(game.preguntas +1, recorrer.length);
        }
}

function main()
{
        const game = new Contadorjuego(recorrer);
        const ui = new UI();
        renderisado(game, ui);
        
}
main();