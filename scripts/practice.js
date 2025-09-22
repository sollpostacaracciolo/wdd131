// This file should contain only JavaScript code.
// Move the HTML code to a .html file, such as 'practice.html'.let firstName = 'Antonia'
let lastName = 'Francesca';
function fullName(first, last) {
    return `${first} ${last}`
}

const fullName = function (firstName, lastName) {
    retunr `${firstName} ${lastName}`;
}

const fullName = (firstName, lastName) => { `${firstName} ${lastName}`;
}

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);