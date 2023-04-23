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
        figure.style.display = 'none'
    }, 600)
})