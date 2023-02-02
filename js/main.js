'use strict';

// ----- 360px以下のスマートフォンサイズ対応 -----
const viewport = document.querySelector('meta[name="viewport"]');
function switchViewport() {
    const value =
        window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
    }
}
addEventListener('resize', switchViewport, false);
switchViewport();
// console.log(viewport.getAttribute('content'));

//---------------------------------------------------

// all pages

// header toggle animation

// const toggleWrapper = document.querySelector('.header_container__toggle');

// const respMenu = document.querySelector('.header_container__respMenu');

let done = true;
toggleWrapper.addEventListener("click",() => {
    respMenu.classList.add('opened');
    setTimeout(() => {
        done = false;
    },100)
});
document.addEventListener('click',() => {
    if(done === false) {
        respMenu.classList.remove('opened');
        setTimeout(() => {
            done = true;
        },100);
    }
});

// header hide and exist animation

let width = window.innerWidth;

if(width < 768) {
    const header = document.querySelector('.header');
    let scrollPoint = 0; 
    let lastPoint = 0; 
    
    window.addEventListener("scroll",function(){
        
        scrollPoint = window.scrollY;
        
        if(scrollPoint > lastPoint){ 
            header.classList.add('header_hide');
        }else{ 
            header.classList.remove('header_hide');
        }

        lastPoint = scrollPoint;
        // ここでリセット
    });
}

// page top animation

const toThetop = document.querySelector(".m_topToBtn");

toThetop.addEventListener("click", scroll_top);

function scroll_top() {
    window.scrollTo({ 
        behavior: "smooth",
        top: 0
    });
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 100) {
        toThetop.style.opacity = "1";
    } else if (window.pageYOffset < 100) {
        toThetop.style.opacity = "0";
    }
}

// all end

// -------------------------------------------------------