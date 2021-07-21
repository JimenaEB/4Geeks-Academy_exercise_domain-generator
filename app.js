const WHO = ["My sister", "My ex", "My evil bunny"];
const ACTION = ["bite", "break", "eat"];
const STUFF = ["the car", "my homework", "the internet"];
const WHERE = ["yesterday", "an hour ago"];

const EXCUSE_OPTIONS = [WHO, ACTION, STUFF, WHERE];

window.onload = () => {
    document.querySelector('#excuse').innerHTML = getExcuse();
};

function getExcuse() {
    let excuse = [];

    for(const list of EXCUSE_OPTIONS) {
        excuse.push(list[getRandom(list)]);
    }
    return excuse.join(' ');
}

function getRandom(options) {
    return Math.floor(Math.random() * options.length)
}