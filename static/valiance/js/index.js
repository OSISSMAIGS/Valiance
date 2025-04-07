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

    // Pop up ad

    const overlay = document.querySelector('.popup-overlay');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.popup-close');
    const buyButton = document.querySelector('.popup-button');
    
    // Check if popup has been closed before
    const isPopupClosed = localStorage.getItem('popupClosed');
    
    if (!isPopupClosed) {
        // Show popup with delay
        setTimeout(() => {
            overlay.classList.add('active');
        }, 1000);
    }
    
    // Close popup function
    function closePopup() {
        overlay.classList.remove('active');
        // Wait for the transition to finish then hide the overlay
        setTimeout(function() {
            overlay.style.display = 'none';
            // Optionally remove inline styles if needed
            overlay.style.pointerEvents = 'none';
        }, 300);
        
        // Save in localStorage that popup has been closed
        localStorage.setItem('popupClosed', 'true');
    }
    
    // Close button event
    closeButton.addEventListener('click', closePopup);
    
    // Also close when clicking outside the popup
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closePopup();
        }
    });
    
    // Redirect on button click
    buyButton.addEventListener('click', function() {
        window.location.href = 'https://valthephoenix.osissmaigs.com';
    });
});
