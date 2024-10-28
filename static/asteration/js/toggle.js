document.addEventListener('DOMContentLoaded', () =>{
    
    const toggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".menu-nav")
    
    toggle.addEventListener("click", () =>{
        toggle.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
        toggle.classList.remove("active")
        navMenu.classList.remove("active")
    }))

})