const header = document.querySelector("header")

window.addEventListener("Scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
    
});