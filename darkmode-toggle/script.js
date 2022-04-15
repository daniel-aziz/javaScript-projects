const toggleBtn = document.getElementById("toggle");


toggleBtn.addEventListener("click", (e) => {
   toggleBtn.classList.toggle('dark')
    document.body.classList.toggle('dark', e.target.clicked)

  
})