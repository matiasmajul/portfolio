$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#ff533d",
        outlineThickness: 0.5,
        maxSpeed: 0.06,
        freezeActive: true,
        shuffleTags: true,
        shape: "sphere",
        zoom: 0.8,
        wheelZoom: false,
        noSelect: true,
        textFont: null,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 1.1,
      },
      "tags"
    )
  ) {
    $("#myCanvasContainer").hide();
  }
});

//!!TODO : HOME ->  agregar etiqueta body
//!!TODO : PROYECTOS: Agregar proyectos con efectos, agregar etiquetas
//!!TODO : ABOUT: Agregar enlace a CV con posibilidad de descarga, agregar etiquetas
//!!TODO : CONTACT: Validación formulario, enviar al mail, agregar mail en mapa.  mejorar estilo al seleccionar. Validacion de email, agregar etiquetas
//!!TODO : HEADER: Foto al hacer hover sobre logo
//!!TODO : GENERAL! Buscar fuentes, subir a github, crear dominio, subir a hosting
