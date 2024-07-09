document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetPosition = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetPosition - 120,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section'); 

    function changeNavbarColor() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - 350 && scrollPosition < sectionTop + sectionHeight) {
                let id = section.getAttribute('id');
                setActiveMenuItem(id);
            }
        });
    }

    function setActiveMenuItem(id) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });

        let menuItem = document.querySelector(`.menu-item a[href="#${id}"]`);
        if (menuItem) {
            menuItem.parentElement.classList.add('active');
        }
    }

    window.addEventListener('scroll', changeNavbarColor);
    changeNavbarColor();
});

const spanTitle = document.querySelector(".text-about-me-title"), textTitle = "SOBRE MÍ:";
const pDescription = document.querySelector(".text-about-me"), textDescription = "sdkfpjgfnasedkfgbasdfkb sdfahbg asdhjb asjdhbf h askpdhbfa ksdbf askdhbfaskdhbfasdfhjb hj bashjdfb b jklsadhbfa sjhdbfj khbfjshbdf j jh basdfhbasf jhbasjbfwe fsdkfhbsef sdhfbsdf sd fsdhfbs  sdfs df";

function efectoType(elemento, texto, i = 0, min, max, callback) {
    if (i < texto.length) {
        elemento.textContent += texto[i];
        let randomNumber = getRandomNumber(min, max);
        setTimeout(() => { efectoType(elemento, texto, i + 1, min, max, callback); }, randomNumber);
    } else {
        if (callback) callback();
    }
}

setTimeout(() => {
    efectoType(spanTitle, textTitle, 0, 100, 150, () => {
        setTimeout(() => {
            efectoType(pDescription, textDescription, 0, 0, 50, () => {
                console.log("Ambos efectos de tipo han terminado.");
            });
        }, 300);
    });
}, 1500)


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener("click", function() {
            id = card.id;

            cards.forEach(card => {
                card.classList.add('inactive') 
            });

            document.querySelector(".card-hidden").classList.add('expanded');
        });
    })
});


