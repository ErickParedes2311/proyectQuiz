//@ts-check
const datos = [
        {
                pregunta: '¿Cuál es el nombre del río más largo del mundo?',
                opciones: ["Río Nilo", "Río Amazonas", "Río Danubio"],
                respuesta: "Río Amazonas"
        },
        {
                pregunta: '¿Cuál es el océano más grande del mundo?',
                opciones: ["Océano Pacífico", "Océano Índico", "Océano Atlántico"],
                respuesta: "Océano Pacífico"
        },
        {
                pregunta: '¿Cuál es el país más grande del mundo?',
                opciones: ["China", "Rusia", "India"],
                respuesta: "Rusia"
        },
        {
                pregunta: '¿Cuál es el país que tiene forma de bota?',
                opciones: ["España", "Honduras", "Italia"],
                respuesta: "Italia"
        },
        {
                pregunta: '¿Cuál es el país más poblado de la tierra?',
                opciones: ["Estados Unidos", "China", "Rusia"],
                respuesta: "China"
        }
];


export class Recorrerdatos{
        /**
         * @param {string} pregunta
         * @param {string[]} opciones
         * @param {string} respuesta
         */
        constructor(pregunta, opciones, respuesta){
                this.pregunta = pregunta;
                this.opciones = opciones;
                this.respuesta = respuesta;
        }

        // verificar si es igual la respuesta y las opcioones

        /**
         * @param {string} opciones
         * @returns {boolean}
         */
        verificarRespuesta(opciones)
        {
                return opciones === this.respuesta;
        }
}
// new Recorrerdatos;

export const recorrer = datos.map(x => new Recorrerdatos(x.pregunta, x.opciones, x.respuesta));