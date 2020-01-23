const span = document.getElementsByTagName('span')[0];

span.innerHTML = ', dafaq is this ?!?';

const name = 'Wally';
const displayText = `Waza, ${name}`;
const newDiv = document.createElement('div');

newDiv.textContent = displayText;
newDiv.style.color = 'green';
document.body.appendChild(newDiv);

function removeSpan() {
  span.style.display = 'none';
}
