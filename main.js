// collapse navbar into burger menu 
document.getElementById('burger-menu').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// FAQ questions expand functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        // toggle active state for clicked question
        faqItem.classList.toggle('active');

        // expand and collapse answer
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
        } else {
            faqAnswer.style.display = 'block';
        }
    });
})

// tooltip functionality
document.querySelectorAll('.feature').forEach(feature => {
    // create tooltip for each feature
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    console.log('tooltip created');
    
    tooltip.textContent = feature.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);

    // show the tooltip when entering the feature
    feature.addEventListener('mouseenter', (e) => {
        tooltip.style.opacity = '1'; // make visible
    });

    // update tooltip position as the mouse moves; makes it follow cursor
    feature.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + -150 + 'px'; // setting X position of tooltip
        tooltip.style.top = e.pageY + 10 + 'px'; // setting Y position of tooltip
    });

    // hide the tooltip on mouseleave
    feature.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0'; // make invisible
    });
});

// leaftletJS map section
var map = L.map('map').setView([38.53813744824751, -121.50517490377375], 15); // initializing map

// add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add marker 
L.marker([38.53813744824751, -121.50517490377375]).addTo(map)
