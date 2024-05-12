 //Cambia las opciones segun el tipo de instrumento seleccionado (Funcional)
 function showInstrumentTypes() {
    var instrumentCategory = document.getElementById("instrumentCategory").value;
    var instrumentTypeSelect = document.getElementById("instrumentType");
    var submitButton = document.querySelector('button[type="submit"]');

    if (instrumentCategory === "") {
        instrumentTypeSelect.innerHTML = "<option value=''>Seleccione un instrumento</option>";
    } else {
        if (instrumentCategory === "viento") {
            var types = ["Guitarra", "Flauta", "Trompeta"];
        } 

        instrumentTypeSelect.innerHTML = "";
        for (var i = 0; i < types.length; i++) {
            var option = document.createElement("option");
            option.text = types[i];
            option.value = types[i];
            instrumentTypeSelect.appendChild(option);
        }
    }
    
}
document.getElementById("instrumentForm").addEventListener("submit", function (event) {
event.preventDefault(); // Evitar que el formulario se envíe


//Crea un div para mostrar los videos del instrumento seleccionado (Incompleto)
var instrumentType = document.getElementById("instrumentType").value;
var guideContainer = document.getElementById("guide-main-container");

if (instrumentType !== "") {
    // Encabezado
    var guideHeader = document.createElement("h1");
    guideHeader.classList.add("guide-header"); //C
    guideHeader.textContent = "Guía de " + instrumentType;
    guideContainer.innerHTML = ""; //resetea el div
    guideContainer.appendChild(guideHeader);

    // Crear un contenedor flex para los iframes
    var iframeFlexContainer = document.createElement("div");
    iframeFlexContainer.classList.add("iframe-container"); // Aplica la clase

    // Videos a mostrar
    var videoIds = ["VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3"]; 
    for (var i = 0; i < videoIds.length; i++) {
        var iframeContainer = document.createElement("div");
        iframeContainer.style.marginRight = "10px"; 

        var iframe = document.createElement("iframe");
        iframe.setAttribute("width", "560");
        iframe.setAttribute("height", "315");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoIds[i]);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        
        iframeContainer.appendChild(iframe);
        iframeFlexContainer.appendChild(iframeContainer);
    }
    guideContainer.appendChild(iframeFlexContainer);
}
});