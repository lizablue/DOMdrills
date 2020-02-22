document.addEventListener('DOMContentLoaded', function () {
    let container = document.createElement('div');
    container.className = 'header-container';

    let h1 = document.createElement('h1');
    let headingText = document.createTextNode('This is an h1');

    h1.appendChild(headingText);
    document.body.appendChild(h1);
})
