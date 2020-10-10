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


function test() {
  let a = 0;
  alert(a);
}
