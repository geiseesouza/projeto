function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a ta img
  const img=document.querySelector("#profile img")

  //substituir a img
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imgem light
    img.setAttribute('src', './assets/assets/AvatarGeise.png')

  }else{
    //se tiver sem light mode, manter a imgem normal
    img.setAttribute('src','./assets/assets/geise-avatar.png')
    
  }

}