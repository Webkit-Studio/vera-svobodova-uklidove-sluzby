// Purpose: This file is used to initialize the PureCounter class and set the parameters for the counter.
document.addEventListener("DOMContentLoaded", function() {  
    
    // Parameters for the counter
    const numberClients = 4;            // Number of clients
    const numberProjects = 6;           // Number of projects
    const numberExistence = 5;          // Number of months/years of existence

    const durationTime = 1;             // Duration of loading animation
    const delayTime = 10;               // Duration od delay

            const counter1 = new PureCounter({
                selector: '.number--clients', 
                start: 0,
                end: numberClients,
                duration: durationTime,
                delay: delayTime,
                once: true,
                decimals: 0,
            });

            const counter2 = new PureCounter({
                selector: '.number--projects', 
                start: 0,
                end: numberProjects,
                duration: durationTime,
                delay: delayTime,
                once: true,
                decimals: 0,
            });

            const counter3 = new PureCounter({
                selector: '.number--existence',
                start: 0,
                end: numberExistence,
                duration: durationTime,
                delay: delayTime,
                once: true,
                decimals: 0,
            });
        });
