var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/deathcore-singer.jpg') {
        myImage.setAttribute ('src', 'images/cat.jpg');
    } else {
        myImage.setAttribute ('src', 'images/deathcore-singer.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cats are cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cats are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

