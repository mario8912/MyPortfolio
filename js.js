const spanTitle = document.querySelector(".text-about-me-title")
const textTitle = "SOBRE MÍ: "
const pDescription = document.querySelector(".text-about-me")
const  textDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, " + 
    "reprehenderit perspiciatis? Commodi nemo recusandae incidunt provident molestias? Odio" + 
    " vitae magni unde esse, molestias consequatur earum, animi consectetur saepe libero omnis quaerat " + 
    "praesentium laborum. Magni esse vitae omnis, obcaecati nostrum ducimus recusandae possimus illo ex numquam laborum architecto tempora officia maiores!" + 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, " + 
    "reprehenderit perspiciatis? Commodi nemo recusandae incidunt provident molestias? Odio";

var cardExpandedId;
var cardExpandedIndex = 0;
var cardExpandedContainer;

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        efectoType(spanTitle, textTitle, 0, 100, 150, () => { //100, 150
            setTimeout(() => {
                efectoType(pDescription, textDescription, 0, 0, 60, () => {}); //0, 50
            }, 300);
        });
    }, 1500)

    backButton();
    expandCards();
    scrollOnClickMenuItem();
    focusMenuItemOnScroll();
    carouselOnButtonNext();
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
                    top: offsetPosition - 100,
                    behavior: 'smooth'
                });
            }
        });
    })
}

function focusMenuItemOnScroll(){
    let sections = [...document.querySelectorAll('hr')]
    sections.push(document.getElementById('index'))
     
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

            cardExpandedContainer = document.querySelector(".card-expanded-container");
            cardExpandedContainer.style.display = "block"

            setTimeout(() => {
                cardExpandedContainer.classList.add("in")
            }, 500);

            cardExpandedContainer.classList.remove("out");

            cardExpandedIndex = id.charAt(id.length-1);
            cardExpandedId = 'cardExpanded' + cardExpandedIndex
            document.getElementById(cardExpandedId).style.display = "grid";
        });
    })
}

function backButton() {
    document.getElementById("buttonBack").addEventListener('click', function() {

        let cards = document.querySelectorAll('.project-card');

        cardExpandedContainer.classList.add("out")
        cardExpandedContainer.classList.remove("in");
    
        cards.forEach(card => {
            card.classList.remove("active");
            card.classList.remove("inactive");
        });
    
        setTimeout(() => {
            document.getElementById("projectsSection").style.display = "flex"
            cardExpandedContainer.style.display = "none";
        }, 500);

        let projectsSection = document.getElementById("projectsSection");
        projectsSection.classList.add("in");

        document.getElementById("cardExpanded" + cardExpandedIndex).style.display = "none"
    });
}
function carouselOnButtonNext() {
    document.getElementById("buttonNext").addEventListener('click', function() {
        
        var firstCardExpanded = document.getElementById("cardExpanded" + cardExpandedIndex);

        firstCardExpanded.classList.remove("in");
        firstCardExpanded.classList.add("out");

        setTimeout(() => {
            firstCardExpanded.style.display = "none";
            firstCardExpanded.classList.remove("out");
        }, 500)

        cardExpandedIndex = +cardExpandedIndex + 1;
        if (cardExpandedIndex == 4) {
            cardExpandedIndex = 1
        } 

        let nextCardExpanded = document.getElementById("cardExpanded" + cardExpandedIndex);

        setTimeout(() => {
            nextCardExpanded.classList.add("in");
            nextCardExpanded.style.display = "grid";
        }, 400)
    });
}