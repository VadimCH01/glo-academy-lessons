function myFirstApp ( name, age) {
	alert("Привет, меня зовут " + name + ". Мне " + age + " года и это моя первая работа на JS!");
    let qName = prompt('Как вас зовут?', 'Пример:Вадим');
function showSkills() {
	alert('Нажми кнопку (ОК) и узнаю что я сейчам изучаю в школе Glo Academy.');
		let skills = ['Html','Css','Js'];

		for (let i = 0; i < skills.length; i++) {
          let temp = 'Я сейчам изучаю в школе Glo Academy: ' + skills[i] + '<br>';
          document.write(temp);

		}
	}

function checkAge() {
	age = prompt('Простите,сколько вам лет?', '')
		if (age > 18) {
			alert("Спасибо, добро пожаловать!")
		} else {
			alert('Простите, вам нет 18 лет.Приходите позже!')

		}
	}
	checkAge();

function calcPow(num) {
		let number = prompt("Калькулятор,квадрат!");
		let numberCheck = number * number;
		alert(numberCheck);
	}
	calcPow(4);
	showSkills();
}

myFirstApp("Vadim", 33)
