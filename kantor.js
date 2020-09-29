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

  alert(Number(a) + Number(b));
}

function question() {
  let userAnswer = prompt("Какое «официальное» название JavaScript?", "....Script");

  if (userAnswer == "ECMAScript") {
    alert("Верно")
  } else {
    alert("Не знаете? ECMAScript!")
  }

}

function age() {
  let userAge = prompt("Сколько вам лет?", 14);

  if (userAge > 14 && userAge < 90) {
    alert("Поживёте ещё");
  } else {
    alert("Ничего себе");
  }
}

function userName() {
  let userName = prompt("Кто там?", '');

  if (userName == 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass == 'Я главный') {
      alert('Здравствуйте!');
    } else if (pass == '' || pass == null) {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }

  } else if (userName == '' || userName == null) {
    alert('Отменено');
  } else {
    alert("Я вас не знаю");
  }
}
