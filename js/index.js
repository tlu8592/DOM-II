// Your code goes here

// nav links (mouseover and mouse out)
const navLinks = document.querySelectorAll('.nav-link');


navLinks[0].addEventListener('mouseover', event => {
    event.target.style.border = '4px dotted slategray';
    event.target.addEventListener('mouseout', event => {
        event.target.style.border = 'none';
    });
})

navLinks[1].addEventListener('mouseover', event => {
    event.target.style.border = '4px inset #8A9A5B';
    event.target.addEventListener('mouseout', event => {
        event.target.style.border = 'none';
    });
})

navLinks[2].addEventListener('mouseover', event => {
    event.target.style.border = '4px dashed sienna';
    event.target.addEventListener('mouseout', event => {
        event.target.style.border = 'none';
    });
})

navLinks[3].addEventListener('mouseover', event => {
    event.target.style.border = '4px outset #87CEEB';
    event.target.addEventListener('mouseout', event => {
        event.target.style.border = 'none';
    })
})

// destinations buttons (keydown)
const destinationButtons = document.querySelectorAll('.btn');

document.addEventListener('keydown', event => {
    if (event.key === 's') {
        destinationButtons[0].style.backgroundColor = '#F4C430';
        document.addEventListener('keyup', event => {
            destinationButtons[0].style.backgroundColor = '#17A2B8';
        })
    } 
    if (event.key === 'm') {
        destinationButtons[1].style.backgroundColor = 'gray';
        document.addEventListener('keyup', event => {
            destinationButtons[1].style.backgroundColor = '#17A2B8';
        })
    }
    if (event.key === 'i') {
        destinationButtons[2].style.backgroundColor = '#9FE2BF';
        document.addEventListener('keyup', event => {
            destinationButtons[2].style.backgroundColor = '#17A2B8';
        })
    }
})

// wheel 
const logoHeading = document.querySelector('.logo-heading');

document.addEventListener('wheel', event => {
    logoHeading.style.color = 'orange';
})

// load 
const homePage = document.querySelector('.home');

homePage.addEventListener('load', event => {
    event.target.style.background = 'yellow';
})

// focus
const images = document.querySelectorAll('img');
console.log(images);

const funBusImage = images[0];

funBusImage.addEventListener('focus', event => {
    event.target.style.border = '5px solid red';
})