// header

document.getElementsByClassName('toggle-button')[0].addEventListener('click', () => {
    document.getElementsByClassName('nav')[0].classList.toggle('active');
    document.getElementsByClassName('header1')[0].classList.toggle('active');
    document.getElementsByClassName('toggle-button')[0].classList.toggle('active')});




const enhance = id => {
     const element = document.getElementById(id), text = element.innerText.split("");

     element.innerText = "";

     text.forEach(letter => {
        const span = document.createElement('span')
        span.className = 'letter';
        span.innerText = letter;
        element.appendChild(span);
     });
};

enhance('span-2')

const ole = document.getElementById('clickable');
const figure = document.getElementById('figure')

ole.addEventListener('mouseover', (e) => {
    var aRect = e.target.getBoundingClientRect();
    var aX = aRect.left + 15;
    var aY = aRect.top + window.pageYOffset;

    setTimeout(() => {
        figure.style.left = `${Math.round(aX)}px`;
        figure.style.top = `${Math.round(aY -110)}px`;
        figure.style.display = 'block';
    }, 600); 
});

ole.addEventListener('mouseout', (e) => {
    setTimeout(() => {
        figure.style.display = 'none';
    }, 600)
})



//send Mail

function sendMail(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get form data
    var params = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        task: document.getElementById('task').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    const serviceID = 'service_pprh0cp';
    const templateID = 'template_455ckml';
    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again later.');
        });
}

// Add event listener to form submit event
document.querySelector('form').addEventListener('submit', sendMail);

const impressum = document.getElementById('impressum-container');
const impressumTitel = document.getElementById('impressum');

impressumTitel.addEventListener('click', (e) => {
    if (impressum.style.display === 'none') {
    impressum.style.display = 'block';
    } else {
        impressum.style.display = 'none'
    }
})