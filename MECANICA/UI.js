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
                const inicio = document.querySelector('.inicio');
                                        inicio.style.display = 'none';
                const quiz = document.querySelector('.content_quiz');
                                        quiz.style.display = 'none';
                const finalPuntaje = document.getElementById("final");
                                                        finalPuntaje.style.display = "inline";

                document.getElementById("resultado").innerText = A;


        }

        mostrarProgreso(x, y)
        {
               const progreso = document.getElementById("progreso");
                                                progreso.innerHTML = `Pregunta: ${x} de ${y}`;
        } 
}
    