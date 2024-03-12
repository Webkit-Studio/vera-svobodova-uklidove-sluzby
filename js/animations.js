// This file combines all animation effects on the website. Here is the list of all the animations and classes.
const parallaxObject = '.animation--parallax'; // Parallax scroll

window.addEventListener('scroll', function() {
    const viewportHeight = window.innerHeight;
    const parallaxElements = document.querySelectorAll('.animation--parallax');
    const paralaxSpeed = 0.5;   // Adjust this value to control the speed of the parallax effect
                                // 0.5 for a subtle effect, 1 for a 1:1 movement with scroll, >1 for faster movement than scrolling

    parallaxElements.forEach(element => {
        const elementBounds = element.getBoundingClientRect();
        const elementTop = elementBounds.top;
        const elementHeight = elementBounds.height;
        const elementCenterY = elementTop + elementHeight / 2;
        const viewportCenterY = viewportHeight / 2;
        
        const parallaxRatio = element.getAttribute('data-parallax-ratio') ? parseFloat(element.getAttribute('data-parallax-ratio')) : paralaxSpeed;

        if (elementCenterY < viewportCenterY) {
            const distanceFromViewportCenter = viewportCenterY - elementCenterY;
            const elementOffset = distanceFromViewportCenter * parallaxRatio;
            element.style.transform = `translateY(${elementOffset}px)`;
        } else {
            element.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const elementRect = targetElement.getBoundingClientRect();
            const absoluteElementTop = window.pageYOffset + elementRect.top;
            const topOffset = 70; // Height of the navbar
            const elementHeight = elementRect.height;
            const viewportHeight = window.innerHeight;

            if (elementHeight > viewportHeight) {
                // If the element is taller than the viewport, scroll to the top of the element, considering the navbar
                window.scrollTo({
                    top: absoluteElementTop - topOffset, // Adjust for navbar height
                    behavior: 'smooth'
                });
            } else {
                // If the element fits within the viewport, center it, considering the navbar
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                // Since 'block: center' doesn't consider the navbar, adjust scroll afterwards if needed
                const scrolledY = window.scrollY;
                if(scrolledY){
                    window.scroll(0, scrolledY - topOffset);
                }
            }
        }
    });
});

/*


/* If Item is in Viewport 
function isInViewport(item) {
    var bounding = item.getBoundingClientRect(),
        myElementHeight = item.offsetHeight,
        myElementWidth = item.offsetWidth;

    if(bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
}

var fromSide = document.getElementsByClassName("animation--fadeInFromSide");
var fromBottom = document.getElementsByClassName("animation--fadeInFromBottom");

/* Window Scrolling 
window.addEventListener("scroll", function(){

    Array.from(fromBottom).forEach(item => {
        if(isInViewport(item)) {
           item.classList.add("fadeInFromBottom");
        }
    });

    Array.from(fromSide).forEach(item => {
        if(isInViewport(item)) {
           item.classList.add("fadeInFromSide");
        }
    });

});

*/


/*$(window).scroll(function() {
    $('.animation--fadeInFromSide').each(function(){
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
  
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            // the element is visible, add the animation class
            $(this).addClass('animate');
        } else {
            // the element is not visible, remove the animation class
        $(this).removeClass('animate');
        }
    });
});*/