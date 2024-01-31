//@ts-check
import {Recorrerdatos} from './Datos.js';
export class Contadorjuego
{
        // almacena desde 0 para el conteo de preguntas
        preguntas = 0;
        // puntuacion correcta que llevamos 
        puntuacion = 0;

        /**
         * @param {Recorrerdatos[]} pregunta
         */
        constructor(pregunta)
        {
                this.pregunta = pregunta;
        }

        /**
         * 
         * @returns {Recorrerdatos} lleva el regitro de en que pregunta va 
         */
        preguntActual()
        {
                return this.pregunta[this.preguntas];
        }

        // aqui si el puntuacion llega a numero .legenth osa all total finaliza el juego
        final()
        {
                return this.pregunta.length === this.preguntas;
        }

        /**
         * @param {string} respuesta
         */
        contadorRespuesta(respuesta)
        {
                console.log(respuesta);
                // si se contesto bien se aumenta la puntuacion 
                if (this.preguntActual().verificarRespuesta(respuesta))
                {
                        this.puntuacion++;
                }
                // para saver en que pregunta va
                this.preguntas++;
        }


}