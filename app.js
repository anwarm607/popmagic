new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    slidesNavigation: true,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection', 'eighthSection','footerSection'],
    menu: '#menu',
    afterLoad: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelectorAll('.animate-text');
        const tl = gsap.timeline({delay: 0.5});
        const img = section.querySelectorAll(".top-image");
        tl.fromTo(title, 0.5, {y: 50, opacity: 0}, {y:0, opacity: 1});
        tl.fromTo(img, 1, {y: "-70%", opacity:0}, {y:"-10%", opacity: 1});
        const desc = section.querySelector('.description');
        tl.fromTo(desc, 0.7, {y: 50, opacity: 0}, {y:0, opacity: 1});
    },
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelectorAll('.animate-text');
        const tl = gsap.timeline({delay: 0.3});
        const image = section.querySelectorAll(".image");
        const sideImageLeft = section.querySelectorAll(".side-image-left");
        const sideImageRight = section.querySelectorAll(".side-image-right");
        tl.fromTo(image, 0.5,{y: "40%", opacity:0}, {y: "0", opacity: 1});
        tl.fromTo(sideImageLeft, 0.5, {x: "-30%", opacity:0}, {x: "0", opacity: 1});
        tl.fromTo(sideImageRight, 0.5, {x: "30%", opacity:0}, {x: "0", opacity:1})
    },

})