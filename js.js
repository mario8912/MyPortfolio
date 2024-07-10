const spanTitle = document.querySelector(".text-about-me-title")
const textTitle = "SOBRE MÍ: "
const pDescription = document.querySelector(".text-about-me")
const  textDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, " + 
    "reprehenderit perspiciatis? Commodi nemo recusandae incidunt provident molestias? Odio" + 
    " vitae magni unde esse, molestias consequatur earum, animi consectetur saepe libero omnis quaerat " + 
    "praesentium laborum. Magni esse vitae omnis, obcaecati nostrum ducimus recusandae possimus illo ex numquam laborum architecto tempora officia maiores!" + 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, " + 
    "reprehenderit perspiciatis? Commodi nemo recusandae incidunt provident molestias? Odio" + 
    " vitae magni unde esse, molestias consequatur earum, animi consectetur saepe libero omnis quaerat " + 
    "praesentium laborum. Magni esse vitae omnis, obcaecati nostrum ducimus recusandae possimus illo ex numquam laborum architecto tempora officia maiores!";

document.addEventListener("DOMContentLoaded", function() {
    /*setTimeout(() => {
        efectoType(spanTitle, textTitle, 0, 0, 2, () => { //100, 150
            setTimeout(() => {
                efectoType(pDescription, textDescription, 0, 0, 2, () => {}); //0, 50
            }, 300);
        });
    }, 1500)*/

    backButton();
    expandCards();
    scrollOnClickMenuItem();
    focusMenuItemOnScroll();
});

function efectoType(elemento, texto, i = 0, min, max, callback) {
    if (i < texto.length) {
        elemento.textContent += texto[i];
        let randomNumber = getRandomNumber(min, max);
        setTimeout(() => { efectoType(elemento, texto, i + 1, min, max, callback); }, randomNumber);
    } else {
        if (callback) callback();
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function scrollOnClickMenuItem(){
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
    })
}

function focusMenuItemOnScroll(){
    let sections = [...document.querySelectorAll('section')]
    sections.push(document.getElementById('projects'))
    //this section above will be querySelectorAll span then add the first section
    function changeNavbarColor() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight) {
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
}

function expandCards(){
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener("click", function() {
            id = card.id;

            cards.forEach(card => {
                if (id == card.id) {
                    card.classList.add('active') 
                } else {
                    card.classList.add('inactive') 
                }
            });

            setTimeout(() => {
                document.getElementById("projectsSection").style.display = "none";
            }, 600);

            let cardExpanded = document.getElementById("cardExpanded");
            cardExpanded.style.display = "grid"
            cardExpanded.classList.remove("out");

            setTimeout(() => {
                cardExpanded.classList.add("in")
            }, 250);
        });
    })
}

function backButton() {
    document.getElementById("buttonBack").addEventListener('click', function() {
        let cardExpanded = document.getElementById("cardExpanded");
        let cards = document.querySelectorAll('.project-card');

        cardExpanded.classList.add("out")
        cardExpanded.classList.remove("in");
    
        cards.forEach(card => {
            card.classList.remove("active");
            card.classList.remove("inactive");
        });
    
        setTimeout(() => {
            document.getElementById("projectsSection").style.display = "flex"
            cardExpanded.style.display = "none";
        }, 1500);

        let projectsSection = document.getElementById("projectsSection");
        projectsSection.classList.add("in");
    });
}