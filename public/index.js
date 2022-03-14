var socket = io();

function addNameToSignupList(name) {
    let list = document.getElementById('signup-list');
    let listItem = document.createElement('li');
    listItem.textContent = name;
    list.append(listItem);
}

var name = prompt("Hey! what's your name?");
console.log(`${name} has connected`);
addNameToSignupList(name);

socket.emit('signup', name);

socket.on('signup', (name) => {
    addNameToSignupList(name);
});

