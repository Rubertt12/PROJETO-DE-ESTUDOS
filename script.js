function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag IMG
  const img = document.querySelector("#profile img ")

  //subtituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode subtituir a imagem
    img.setAttribute("src", "./assets/assets/rubertt-mergulhador.png")
  } else {
    //se não mantem a imagem
    img.setAttribute("src", "./assets/assets/teste-rubertt.png")
  }
}
