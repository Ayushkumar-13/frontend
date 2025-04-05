let password = document.getElementById("password");
let generate = document.getElementById("generate");
let changeTheme = document.getElementById("change-theme");
let container = document.getElementById("container");

let off =0;

  


changeTheme.addEventListener("click" , function () {
    if (off == 0) {
    container.style.backgroundColor = "white"
    container.style.color = "black"
    
    off = 1;
    }
    else{
        container.style.backgroundColor = "#181717cb"
        container.style.color = "white"
        off = 0;
    }

  
  })


  function generatePassword() {
    const length = 8; 
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(randomIndex);
    }
    
    password.textContent = pass;
    
  }
  
  generate.addEventListener("click", function() {
    generatePassword();
  });


