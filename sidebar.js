const press = document.querySelector("#toggle-btn");

press.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
    document.querySelector("#navbar").classList.toggle("expand");
  });
