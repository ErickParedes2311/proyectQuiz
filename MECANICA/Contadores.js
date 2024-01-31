//@ts-check
import {Recorrerdatos} from './Datos.js';
export class Contadorjuego
{
        preguntas = 0;
        contador = 0;

        /**
         * @param {Recorrerdatos[]} pregunta
         */
        constructor(pregunta)
        {
                this.pregunta = pregunta;
        }

        /**
         * 
         * @returns {Recorrerdatos}
         */
        preguntActual()
        {
                return this.pregunta[this.preguntas];
        }

        // aqui si el contador llega a numero .legenth osa all total finaliza el juego
        final()
        {
                return this.pregunta.length === this.preguntas;
        }

        /**
         * @param {string} respuesta
         */
        contadorRespuesta(respuesta)
        {
                if (this.preguntActual().verificarRespuesta(respuesta))
                {
                        this.contador++;
                }
                this.preguntas++;
        }


}