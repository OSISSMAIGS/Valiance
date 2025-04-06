document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
})

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.fixed-icon-container').classList.add('active');
        
        // Hilangkan bubble setelah 3 detik
        setTimeout(function() {
            document.querySelector('.fixed-icon-container').classList.remove('active');
        }, 7000);
    }, 1000);
});