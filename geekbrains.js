function convertTempreture() {
  let celsius = prompt("Введите значение температуры в градусах Цельсия", "0");
  alert((9 / 5) * celsius + 32);
}

function nameAdmin() {
  let name = ("Василий");
  let admin = name;
  alert(admin);
}

function typeTest() {
  let anyType = (1000 + "108");
  alert(anyType);
  alert(typeof(anyType));
}

function conditionFirst() {
  let a = +prompt('Введите значение переменной А', '1');
  let b = +prompt('Введите значение переменной B', '1');
  if (a > 0 && b > 0) {
    let c = (a - b);
    alert('A и B положительные, их разность равна ' + c);
  } else {
    if (a < 0 && b < 0) {
      c = (a * b);
      alert('A и B отрицательные, их произведение равно ' + c);
    } else {
      c = (a + b);
      alert('A и B c разными знаками, их сумма равна ' + c);
    }
  }
}


function hw2ex4() {
  let a = Math.round(Math.random() * 100);
  if (a > 15) {
    hw2ex4();
  } else {
    alert('Сгенерирована переменная А со значением ' + a);
    switch (a) {
      case 0:
      alert('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
      brake;
      case 1:
      alert('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
      brake;
      case 2:
      alert('2 3 4 5 6 7 8 9 10 11 12 13 14 15');
      brake;
      case 3:
      alert('3 4 5 6 7 8 9 10 11 12 13 14 15');
      brake;
      case 4:
      alert('4 5 6 7 8 9 10 11 12 13 14 15');
      brake;
      case 5:
      alert('5 6 7 8 9 10 11 12 13 14 15');
      brake;
      case 6:
      alert('6 7 8 9 10 11 12 13 14 15');
      brake;
      case 7:
      alert('7 8 9 10 11 12 13 14 15');
      brake;
      case 8:
      alert('8 9 10 11 12 13 14 15');
      brake;
      case 9:
      alert('9 10 11 12 13 14 15');
      brake;
      case 10:
      alert('10 11 12 13 14 15');
      brake;
      case 11:
      alert('11 12 13 14 15');
      brake;
      case 12:
      alert('12 13 14 15');
      brake;
      case 13:
      alert('13 14 15');
      brake;
      case 14:
      alert('14 15');
      brake;
      case 15:
      alert('15');
      brake;
    }
  }
}
