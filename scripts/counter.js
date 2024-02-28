document.addEventListener("DOMContentLoaded", function() {  
    
    const durationTime = 1.5;   // Duration of loading animation
    const delayTime = 2;        // Duration od delay

    const counter1 = new PureCounter({
        selector: '.number-1', 
        start: 0,
        end: 4,
        duration: durationTime,
        delay: delayTime,
        once: true,
        decimals: 0,
    });

    const counter2 = new PureCounter({
        selector: '.number-2', 
        start: 0,
        end: 6,
        duration: durationTime,
        delay: delayTime,
        once: true,
        decimals: 0,
    });

    const counter3 = new PureCounter({
        selector: '.number-3',
        start: 0,
        end: 5,
        duration: durationTime,
        delay: delayTime,
        once: true,
        decimals: 0,
    });
});
