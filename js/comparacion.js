let info_jackson = `
  <article>
    Información de Jackson.
  </article>
`;

let info_gibson = `
  <article>
    Información de Gibson.
  </article>
`;
let info_bcrich = `
  <article>
    Información de B.C.Rich.
  </article>
`;

function mostrar_info_guitarra(formulario) {
    var seleccion;
    var informacionContainer;
  
    if (formulario === 'izquierda') {
      seleccion = document.getElementById("guitarras_izq").value;
      informacionContainer = document.getElementById("informacionIzquierdaContainer");
    } else if (formulario === 'derecha') {
      seleccion = document.getElementById("guitarras_der").value;
      informacionContainer = document.getElementById("informacionDerechaContainer");
    }
    

    // Mostrar la información correspondiente a la opción seleccionada
    if (seleccion === "Jackson") {
        informacionContainer.innerHTML = info_jackson;
    } 
    else if (seleccion === "Gibson") {
        informacionContainer.innerHTML = info_gibson;
    }
    else if (seleccion === "B.C. Rich"){
        informacionContainer.innerHTML = info_bcrich;
    }
    informacionContainer.style.display = "block"
}
    
  