/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el form
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso arriba de los campos con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los campos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// Crear las funciones para realizar cada tarea

/* 

 TODO:

 1. Guardar en variables los campos requeridos ✅
    1.1. ¿Es mejor una variable o varias?

 2. Validar si los campos estan vacios
    2.1. Recorrer los inputs
    2.2. Hacer un listado de campos invalidos para poder imprimirlos en el mensaje de error
          2.2.1. Crear una variable para el listado
          2.2.2. Consultar si cada campo es invalido (string vacio)
          2.2.3. Guardar los campos invalidos en la lista
 3. A los campos invalidos
    3.1. Ponerles el borde rojo

 4. Imprimir resultados
    4.1. Imprimir campos invalidos
          4.1.1. Crear elemento de titulo
          4.1.2. Crear un elemento de lista
          4.1.3. Agregar titulo y lista al DOM y ponerlo rojo
                  4.1.3.1 Crear condicion para agregar elementos invalidos
          4.1.4. Agregar el mensaje invalido al DOM: insertarlo antes del formulario
          4.1.5. Agregar el listado de campos invalidos
 */

function agregarMensajeDeError(camposInvalidos) {
    const errorElemnt = document.createElement("div");
    errorElemnt.classList.add("mensaje-error");
  
    // AQUI VAMOS A ESCRIBIR EL MENSAJE DE ERROR
    const mensajeInvalidoTitulo = document.createElement("h2");
    mensajeInvalidoTitulo.innerText =
      "Ocurrio un error, verifica los siguientes campos:";
  
    const listaInvalidoInput = document.createElement("ul");
  
    camposInvalidos.forEach((elementInvalido) => {
      const li = document.createElement("li");
      li.innerText = elementInvalido.getAttribute("name");
  
      listaInvalidoInput.appendChild(li);
    });
  
    errorElemnt.appendChild(mensajeInvalidoTitulo);
    errorElemnt.appendChild(listaInvalidoInput);
  
    form.parentNode.insertBefore(errorElemnt, form);
  }
  
  function agregarMensajeDeExito() {
    const validoElemnt = document.createElement("div");
    validoElemnt.classList.add("mensaje-valido");
  
    validoElemnt.innerText = "Su formulario fue enviado";
  
    document.body.appendChild(validoElemnt);
  }
  
  function dameLosCamposInvalidos(inputsRequeridos) {
    let invalidos = [];
  
    inputsRequeridos.forEach((actualInput) => {
      if (actualInput.value === "") {
        invalidos.push(actualInput);
        actualInput.style.border = "1px solid red";
      } else {
        actualInput.style.border = "";
      }
    });
  
    return invalidos;
  }
  
  function reiniciarMensajesDeError() {
    const mensajeDeErrror = document.querySelector(".mensaje-error");
    if (mensajeDeErrror) {
      mensajeDeErrror.remove();
    }
  
    const mensajeDeExito = document.querySelector(".mensaje-valido");
    if (mensajeDeExito) {
      mensajeDeExito.remove();
    }
  }
  
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function (e) {
    reiniciarMensajesDeError();
  
    const inputsRequeridos = document.querySelectorAll(".requerido");
  
    e.preventDefault();
  
    const invalidos = dameLosCamposInvalidos(inputsRequeridos);
  
    // Si tenemos campos invalidos
    if (invalidos.length > 0) {
      agregarMensajeDeError(invalidos);
    } else {
      agregarMensajeDeExito();
    }
  });
  