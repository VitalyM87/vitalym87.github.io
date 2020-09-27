'use strict';

function greetings() {
  let name = prompt("Ваше имя?", "Юзернейм");
  alert(`Привет ${name}!`);
}

function counter() {
  let counter = 0;
  alert(counter++);
  alert(counter++);
  alert(counter++);
  alert(counter++);
}
