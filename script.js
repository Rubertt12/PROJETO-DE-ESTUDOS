function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag IMG
  const img = document.querySelector("#profile img ")

  //subtituir a img
  if (html.classList.contains("teste")) {
    // se tiver light mode subtituir a imagem
    img.setAttribute("src", "./assets/teste-rubertt.png")
  } else {
    //se não mantem a imagem
    img.setAttribute("src", "./assets/rubertt-mergulhador.png")
  }
}
