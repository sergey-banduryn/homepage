  
  let imgs = document.querySelectorAll('.photo-box img');
    
  imgs.forEach((img) => {
    img.addEventListener("click", activateImg);
  });
  
  function activateImg(event) {
    imgs.forEach((img) => (img.className = ""));
    event.target.className = "photo-active"
  }