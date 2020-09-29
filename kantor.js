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

function summ() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);

  alert( Number(a) + Number(b));
}

function question() {
  let userAnswer = prompt("Какое «официальное» название JavaScript?", "....Script");

  if (userAnswer == "ECMAScript") {
    alert("Верно")
  } else {
    alert("Не знаете? ECMAScript!")
  }

}
