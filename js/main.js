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

{
  const modal = document.querySelector(".header_toggle");
  const toggle = document.querySelector(".header_toggle__bars");
  const toggleItems = document.querySelectorAll(".header_toggle_link");
  // フラグ変数
  let done = false;

  toggle.addEventListener("click", () => {
    modal.style.display = "block";
    toggle.classList.add("open");
    setTimeout(() => {
      done = true;
    }, 10);
  });
  toggle.addEventListener("click", () => {
    if (done === true) {
      modal.style.display = "none";
      toggle.classList.remove("open");
      setTimeout(() => {
        done = false;
      }, 10);
    }
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      toggle.classList.remove("open");
    }
  });
  toggleItems.forEach((toggleItem) => {
    toggleItem.addEventListener("click", () => {
      modal.style.display = "none";
      toggle.classList.remove("open");
    });
  });
}

// swiper

try {
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: "fade",
        autoplay: true,
    });
} catch (error) {
    console.log(error.message);
}

// gsap

let workBox = document.querySelectorAll('.gsap_box');
let workImg = document.querySelectorAll('.gsap_module');
let gsapToArray = gsap.utils.toArray(workBox);
let gsapToImgArray = gsap.utils.toArray(workImg);

// 関連(同一クラス名に)関数を一緒に扱う

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: gsapToImgArray[0],
  start: 'top center',
  end: 'bottom center',
  scrub: -1,
  toggleActions: "restart none reverse none",
  onEnter: () => {
    gsap.to(gsapToArray[0], {
      scale: 1.5,
      opacity: 1,
      duration: 1,
    });
  },
  onLeave: () => {
    gsap.to(gsapToArray[0], {
        scale: 1,
        opacity: .5,
    });
  }
});

ScrollTrigger.create({
  trigger: gsapToImgArray[1],
  start: 'top center',
  end: 'bottom center',
  scrub: -1,
  toggleActions: "restart none reverse none",
  onEnter: () => {
  gsap.to(gsapToArray[1], {
    scale: 1.5,
    opacity: 1,
    duration: 1,
  });
  },
  onLeave: () => {
    gsap.to(gsapToArray[1], {
      scale: 1,
      opacity: .5,
    });
  }
});

ScrollTrigger.create({
    trigger: gsapToImgArray[2],
    start: 'top center',
    end: 'bottom center',
    scrub: -1,
    toggleActions: "restart none reverse none",
  onEnter: () => {
    gsap.to(gsapToArray[2], {
      scale: 1.5,
      opacity: 1,
      duration: 1,
    });
  },
  onLeave: () => {
    gsap.to(gsapToArray[2], {
      scale: 1,
      opacity: .5,
    });
  }
});
// gsapToArray.forEach((el, index) => {
//     console.log(el);
//     ScrollTrigger.create({
//         trigger:  index === 0 ? el : "",
//         start: 'top 10%',
//         endTrigger: index === 1 ? el : "",
//         toggleClass: { targets:  index === 0 ? el : "", className: "active"},
//         onToggle: () => {
            
//             ScrollTrigger.create({
//                 trigger:  index === 1 ? el : "",
//                 start: 'center center',
//                 toggleClass: {targets:  index === 0 ? el : "", className: "active"},
//             });
//         } 
//     });
//     ScrollTrigger.create({
//         trigger:  index === 2 ? el : "",
//         start: 'top 0%',
//         end : 'bottom 90%',
//         toggleClass: {targets:  index === 0 ? el : "", className: "active"},
//     });
// });

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