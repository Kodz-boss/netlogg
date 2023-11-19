var btn = document.getElementById("toggleBtn");
var inp = document.getElementById("passwordInput");

btn.addEventListener("click", () => {
    if(inp.type === "password"){
        inp.type = "text";
        btn.textContent = "Hide";
    } else {
        inp.type = "password";
        btn.textContent = "Show";
    }
});

var logi = document.querySelector(".logi");
var pop = document.querySelector(".pop");

logi.addEventListener("click", () =>{
    pop.classList.toggle("active");
});