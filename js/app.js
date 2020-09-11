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
    activeElem = document.getElementsByClassName('your-active-class');

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
     }
    
    function menuItemActive(list, elem) {
        list.forEach(item => item.classList.remove('your-active-class'));
        elem.classList.add('your-active-class');
    }

    let handler = ul.addEventListener("click", function (e) {

        console.log(e)
        let list = e.target.parentNode.childNodes;
        console.log(e.target.parentNode.childNodes)
        let elem = e.target;
        console.log(e.target)
        switch (e.target.innerText) {
            case 'Section-1':
                scrollHelper(sections[0]);
                menuItemActive(list, elem);
                break;
            case 'Section-2':
                scrollHelper(sections[1]);
                menuItemActive(list, elem);
                break;
            case 'Section-3':
                scrollHelper(sections[2]);
                menuItemActive(list, elem);
                break;
            case 'Section-4':
                scrollHelper(sections[3]);
                menuItemActive(list, elem);
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
            onScrollHelper(sections[1]) 
        } else if (isInViewport(sections[2])) {
            onScrollHelper(sections[2]);
        } else if (isInViewport(sections[3])) {
            onScrollHelper(sections[3]);
        }
    }); 

    createNav();
    handler;
   
});