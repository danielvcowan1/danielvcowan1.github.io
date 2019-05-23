// Typewriter code
var pos = 0;
var turn = 0;
var text = 'Hello World! I am';
var data = ['a Programmer.',
			'a Web Developer.',
			'a Bubblehead.',
			'endlessly curious.',
			'a sailor (ARRRRG!)',
			'funny... I think.',
			'creative.',
			'SO MUCH MORE!'];
var speed = 100;

setTimeout(initialText, speed);

function initialText() {
	if (pos < text.length) {
		document.getElementById("text").innerHTML += text.charAt(pos);
		pos++;
		setTimeout(initialText, speed);
	}
	else{
		pos=0;
		setTimeout(typeWriter, speed);
	}
}

function typeWriter() {
	if (pos < data[turn].length) {
		document.getElementById("demo").innerHTML += data[turn].charAt(pos);
		pos++;
		setTimeout(typeWriter, speed);
	} else {
		setTimeout(erase, speed+100);
	}
}

function erase() {
	if(turn==data.length-1) 
		return;
	if (pos >= 0) {
		var str=data[turn].toString().substring(0, pos);
		document.getElementById("demo").innerHTML = str;
		pos--;
		setTimeout(erase, speed-50);
	} else {
		turn++;
		setTimeout(typeWriter, speed);
	}
}