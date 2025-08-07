document.addEventListener("DOMContentLoaded", function() {
    const competitionData = [
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_yelyel.jpg') }}",
            title: "Yel-Yel",
            link: "/Events/Rakwala/yel-yel"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_kelereng.jpg') }}",
            title: "Estafet Kelereng",
            link: "/Events/Rakwala/estafet_kelereng"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_estafet.jpg') }}",
            title: "Estafet Air",
            link: "/Events/Rakwala/estafet_air"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_buah_berhadiah.jpg') }}",
            title: "Buah Berhadiah",
            link: "/Events/Rakwala/buah_berhadiah"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_bola_dan_pipa.jpg') }}",
            title: "Bola Pipa",
            link: "/Events/Rakwala/bola_pipa"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_menyanyi.jpg') }}",
            title: "Nyanyi",
            link: "/Events/Rakwala/nyanyi"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_susun_kata.png') }}",
            title: "Susun Kata",
            link: "/Events/Rakwala/susun_kata"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_masak.png') }}",
            title: "Masak",
            link: "/Events/Rakwala/masak"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_kursi.jpg') }}",
            title: "Siapa Cepat Dapat Kursi",
            link: "/Events/Rakwala/siapa_cepat_dapat_kursi"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_makan_kerupuk.png') }}",
            title: "Makan Kerupuk",
            link: "/Events/Rakwala/makan_kerupuk"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_cerpen.JPG') }}",
            title: "Cerpen",
            link: "/Events/Rakwala/cerpen"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_sarung_smash.png') }}",
            title: "Sarung Smash",
            link: "/Events/Rakwala/sarung_smash"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_supporter.jpg') }}",
            title: "Supporter",
            link: "/Events/Rakwala/supporter"
        },
        {
            image: "{{ url_for('static', filename='valiance/img/rakwala/l_fashion_show.png') }}",
            title: "Fashion Show",
            link: "/Events/Rakwala/fashion_show"
        }
    ];

    const posterContainer = document.querySelector('.performance .gambar');
    if (posterContainer) {
        posterContainer.innerHTML = '';

        competitionData.forEach((comp, index) => {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            imageContainer.style.animationDelay = `${index * 0.1}s`;

            imageContainer.innerHTML = `
                <img src="${comp.image}" alt="${comp.title}" >
                <div class="overlay">
                    <h5>${comp.title}</h5>
                    <a href="${comp.link}" class="btn">Lihat Detail</a>
                </div>
            `;

            posterContainer.appendChild(imageContainer);
        });
    }

    // Animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
            }
        });
    }, observerOptions);

    // Observe all hidden elements
    document.querySelectorAll('.hidden').forEach(el => {
        observer.observe(el);
    });

    // Add show class to elements that are already visible
    setTimeout(() => {
        document.querySelectorAll('.hidden').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('show');
                el.classList.remove('hidden');
            }
        });
    }, 100);
}); 