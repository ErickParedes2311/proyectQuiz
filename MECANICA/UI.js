export class UI 
{
        constructor(){};

        // muestra la pregunta en el html 
        /**
         * @param {string} text cambiar en html
         */
        mostrarPregunta(x)
        {
                document.getElementById('pregunta').innerText = x;
        }

        // para mostrar las opciones
        /**
         * 
         * @param {string[]} o opciones
         */
        mostrarOpciones(o, callback) 
        {
                const contBoton = document.getElementById('opciones');
                                                        contBoton.innerText = "";

                for(let i= 0; i < o.length; i++)
                {       
                        const boton = document.createElement('button');
                                                        boton.innerText = o[i];
                                                        boton.className = "boton_opciones"
                                                        boton.addEventListener('click', () => callback(o[i]));

                        contBoton.append(boton);
                }
        }

        mostrarPuntaje(A)
        {
                const finalPuntaje = `
                        <h1>PUNTUACIÓN</h1>
                        <h2>Tu resultado: ${A}</h2>
                `;
                const elemento = document.querySelector(".content_quiz");
                                                elemento.innerHTML = finalPuntaje;
        }

        mostrarProgreso(x, y)
        {
               const progreso = document.getElementById("progreso");
                                                progreso.innerHTML = `Pregunta: ${x} de ${y}`;
        }               

}