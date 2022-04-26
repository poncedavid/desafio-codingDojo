function fondoPantalla(sw) {
  if (sw == 0) {
    document.getElementById("contenido").style.backgroundImage =
      "url('dojo_arena_photos/beach.jpg')";

  } else if (sw == 1) {
    document.getElementById("contenido").style.backgroundImage =
      "url('dojo_arena_photos/earth.jpg')";
  } else if (sw == 2) {
    document.getElementById("contenido").style.backgroundImage =
      "url('dojo_arena_photos/dojo.jpg')";
  } else if (sw == 3) {
    document.getElementById("contenido").style.backgroundImage =
      "url('dojo_arena_photos/forest.jpg')";
  } else if (sw == 4) {
    document.getElementById("contenido").style.backgroundImage =
      "url('dojo_arena_photos/matrix.jpg')";
  } else if (sw == 5) {
    document.getElementById("contenido").style.backgroundImage =
      "url('dojo_arena_photos/snow.jpg')";
  }
}

function mostrar(sw) {
  if (sw == 0) {
    document.getElementById("grupo-botones").style.display = "none";
    document.getElementById("grupo-botonis").style.display = "block";
    document.getElementById("personajito1").style.display = "block";
    document.getElementById("personajito2").style.display = "block";
  }

  if (sw == 1) {
    document.getElementById("grupo-botones").style.display = "none";
    document.getElementById("grupo-botonis").style.display = "block";
    document.getElementById("personajito1").style.display = "block";
    document.getElementById("personajito2").style.display = "block";
  }

  if (sw == 2) {
    document.getElementById("grupo-botones").style.display = "none";
    document.getElementById("grupo-botonis").style.display = "block";
    document.getElementById("personajito1").style.display = "block";
    document.getElementById("personajito2").style.display = "block";
  }

  if (sw == 3) {
    document.getElementById("grupo-botones").style.display = "none";
    document.getElementById("grupo-botonis").style.display = "block";
    document.getElementById("personajito1").style.display = "block";
    document.getElementById("personajito2").style.display = "block";
  }

  if (sw == 4) {
    document.getElementById("grupo-botones").style.display = "none";
    document.getElementById("grupo-botonis").style.display = "block";
    document.getElementById("personajito1").style.display = "block";
    document.getElementById("personajito2").style.display = "block";
  }

  if (sw == 5) {
    document.getElementById("grupo-botones").style.display = "none";
    document.getElementById("grupo-botonis").style.display = "block";
    document.getElementById("personajito1").style.display = "block";
    document.getElementById("personajito2").style.display = "block";
  }
}



luchador1.addEventListener("change",()=>{
    personajito1.setAttribute("src","dojo_arena_photos/" + luchador1.selectedOptions[0].value + ".png")
  })

luchador2.addEventListener("change",()=>{
    personajito2.setAttribute("src","dojo_arena_photos/" + luchador2.selectedOptions[0].value + ".png")
  })

  