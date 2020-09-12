/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

document.addEventListener('DOMContentLoaded', (event) => {
  
    let ul,
        activeElem,
        nav_item;
    
    ul = document.querySelector('ul');
    console.log(ul.childNodes)
    activeElem = document.getElementsByClassName('your-active-class');
    console.log(activeElem)
    const sections = document.querySelectorAll('section');

    // Build menu
    let createNav = () => {
        for (let i = 1; i < 5; i++) {
            nav_item = document.createElement('li');
            nav_item.innerText = `Section-${i}`;
            ul.append(nav_item);
        }
    };

    function scrollHelper(elem) {
        Array.from(activeElem).forEach(item => item.classList.remove('your-active-class'));
        elem.classList.add('your-active-class');
        elem.scrollIntoView({ behavior: "smooth" });
    }

     function onScrollHelper(elem) {
        Array.from(activeElem).forEach(item => item.classList.remove('your-active-class'));
        elem.classList.add('your-active-class');
        menuItemActive(elem);
     }
    
    function menuItemActive(elem) {
        ul.childNodes.forEach(item => item.classList.remove('your-active-class'));
        ul.childNodes.forEach(item => {
            if (elem.dataset.nav === item.textContent) {
                item.classList.add('your-active-class');
            }
        })
        elem.classList.add('your-active-class');
    }

    let handler = ul.addEventListener("click", function (e) {

        let elem = e.target;
        console.log(e.target)
        switch (e.target.innerText) {
            case 'Section-1':
                scrollHelper(sections[0]);
                break;
            case 'Section-2':
                scrollHelper(sections[1]);
                break;
            case 'Section-3':
                scrollHelper(sections[2]);
                menuItemActive(elem);
                break;
            case 'Section-4':
                scrollHelper(sections[3]);
                menuItemActive(elem);
                break;
        }
    });

    window.addEventListener("scroll", function (e) {
       
        let isInViewport = function (elem) {
            let bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= window.innerHeight &&
                bounding.right <= window.innerWidth
            );
        };

        if (isInViewport(sections[0])) {
            onScrollHelper(sections[0]);
        } else if (isInViewport(sections[1])) {
            onScrollHelper(sections[1]);
             menuItemActive(elem);
        } else if (isInViewport(sections[2])) {
            onScrollHelper(sections[2]);
            menuItemActive(elem);
        } else if (isInViewport(sections[3])) {
            onScrollHelper(sections[3]);
            menuItemActive(elem);
        }
    }); 

    createNav();
    handler;
   
});