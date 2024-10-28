document.addEventListener("DOMContentLoaded", () => {

    var i = 1;
    var docheight = Math.max(
        document.documentElement["clientHeight"],
        document.body["scrollHeight"],
        document.documentElement["scrollHeight"],
        document.body["offsetHeight"],
        document.documentElement["offsetHeight"]
    );

    var docwidth = Math.max(
        document.documentElement["clientWidth"],
        document.body["scrollWidth"],
        document.documentElement["scrollWidth"],
        document.body["offsetWidth"],
        document.documentElement["offsetWidth"]
    );

    // console.log(docheight);
    // console.log(docwidth);

    starInterval = setInterval(() => {
        if (i < 200) {
            const star = document.createElement("img");
            star.src = "https://res.cloudinary.com/dhnak6cxo/image/upload/v1707380363/Asteration/Reveera/reveera_background_fv8xxt.png";
            star.classList.add(`star${i}`);
            star.style.top = `${Math.floor(Math.random()*docheight)-50}px`;
            star.style.left = `${Math.floor(Math.random()*docwidth)-50}px`;
            document.querySelector(".stars").append(star);
            i++;
        }
    }, 1);

    starInterval = setInterval(() => {
        const star = document.createElement("img");
        star.src = "https://res.cloudinary.com/dhnak6cxo/image/upload/v1707380363/Asteration/Reveera/reveera_background_fv8xxt.png";
        star.classList.add(`star${i}`);
        star.style.top = `${Math.floor(Math.random()*docheight)-50}px`;
        star.style.left = `${Math.floor(Math.random()*docwidth)-50}px`;
        document.querySelector(".stars").append(star);
        i++;
    }, 5000);

    var j = 1;
    deleteInterval = setInterval(() => {
        const star = document.querySelector(`.star${j}`);
        star.remove();
        j++;
    }, 5000);
    
})