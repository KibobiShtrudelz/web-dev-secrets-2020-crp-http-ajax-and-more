const span = document.getElementsByTagName('span')[0];
span.innerHTML = 'Changed by JS!';
span.style.display = 'inline';

const name = 'Snuki';
const displayText = `Welcome ${name}!`;

const newDiv = document.createElement('div');
newDiv.textContent = displayText;
newDiv.style.color = 'green';

document.body.appendChild(newDiv);
