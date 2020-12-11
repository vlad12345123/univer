
//1
var x = +prompt('Enter x: ');
debug(x, "number")
alert((x**2 - 7*x + 10)/(x**2 - 8*x + 12));

//2

var weightList = prompt("Enter list of weight");

debug(weightList, 'number', 3, undefined, "all")

var list = weightList.split(' ');

var max = list[0]
var min = list[0]
var sum = 0;

for (var num in list) {
    sum += +list[num];
    if (list[num] < min){min = list[num]}
    else if (list[num] > max) {max = list[num]}
}

//3
var k = 0;
var stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
            var f = prompt("Enter name:");
for (var i = 0; i < f.length; i++)
    for (var j = 0; j < stringsearch.length; j++)
         if (f[i] === stringsearch[j]) {
          ++k;
          break;
     }
return k ? k : "Net sovpadenyi";

alert('Sum - ' +  sum);
alert('Min weight - ' + min);
alert('Max weight - ' + max);

//4

var sentence = prompt("Enter 20 lenght string: ");

debug(sentence, "any", undefined, 20);

sentence = sentence.split('');
fiveLetter = sentence[4];
temp_sentence = sentence.filter(letter => letter == fiveLetter)
alert('Result - ' + temp_sentence.length);

//5

var x = prompt("введите число x"), y = prompt("введите число y");
	if (!isNaN(x)){
		if(!isNaN(y)){
		var a = prompt("введите значание от 1до 4, 1 сложение, 2 вычитание, 3 умножение, 4 деление");
			switch (a) {
				case "1" :
					document.write( "сумма чисел " +x +" и " +y +" равна  " + (+x + +y));
					break;
				case "2" :
					document.write("разность чисел " +x +" и " +y +" равна " +(x-y));
					break;
				case "3" :
					document.write("произведение чисел " +x +" и " +y +" равно " +(x*y));
					break;
				case "4" :
					document.write("деление числа " +x +" на " +y +" равно " +(x/y));
					break;
				default : document.write ("сказали же, что надо ввести от 1 до 4");
					break;

			}
		} else alert("значение y не число")
	} else alert("значение x не число")

//6

var voltage = prompt("Введите напряжение");
debug(voltage, "number");
var amperage = prompt("Введите ток");
debug(amperage, "number");
alert(voltage/amperage);

//7
var r1=prompt("введите значение сопротивления первого проводника"), 
	r2=prompt("введите значение сопротивления второго проводника"),rPar, rCons;
	rCons = +r1 + +r2;
	rPar=(r1*r2)/(r1+r2);
	if(isNaN(r1) || isNaN(r2)){document.write("надо ввести число")}
		else {	
            document.write("сопротивление двух последовательных резисторов равно " +rCons +"<br>" +"сопротивление двух параллельных резисторов равно " +rPar);
             }


//9

var now = new Date();
	var hours = now.getHours();
	var time = hours +0.01*now.getMinutes()
	document.write(time +"<br>");
	if (time >= 7 && time <= 8){
		document.write("время завтрака" +"<br>");
	} else if(time >=13 && time <= 14){
		document.write("время обеда" +"<br>");
	} else if(time >=19 && time <= 20){
		document.write("время ужина" +"<br>");
	} else if(time >=18 && time <= 23){
		document.write("время отдыха" + "<br>");
	}else if(time >=23 && time <= 6.30){
		document.write("время сна")
	} else {
		document.write("время работы")
	}

//10

var rangeTo = 10;
var primeList = []
var primeFlag= true;
for (var i = 2; i <=rangeTo; i++) {
    primeFlag = true;
    for (var j = 2; j < i; j++){
        if (i % j == 0) {
            primeFlag = false;
        }
    }
    if (primeFlag) {
        primeList.push(i);
    }
}
alert(primeList)

//15

function findY(x) {
    return 4*Math.sin(x) - 0.5*Math.sin(x);
}
for (var i=0.1; i <= 0.8; i += 0.05) {
    console.log(findY(i));
}

//16
var v = prompt("Введите начальную скорость");
debug(v, "number");
var t = prompt("Введите время полёта тела");
debug(t, "number")
var a = Math.asin(t*9.8/(2*v))
if (!isNaN(a)){
    alert(a)
}
else {
    alert("Проверьте введенные данные")
}

//18

var count, i=0, firstpref = 1, secondpref = 0;
	count = prompt("Введите колчичество")
	while(i < count){ 
	document.write(secondpref +",");
	sum = firstpref + secondpref;
	secondpref = firstpref;
	firstpref = sum;
	i++;

//20
function start20() {
    var amountOfNums = prompt("What size numbers in array?: ");
    debug(amountOfNums, "number");
    var nums = []

    for (var i = 0; i < amountOfNums; i++) {
        nums.push(random(0, 10))
    }
    var sum = 0;
    for (i in nums) {
        sum += nums[i];
    }
    alert("Массив " + nums);
    alert("Сумма " + sum);

    function random(start, end) {
        var rand = start + Math.random()*(end + 1 - start);
        return Math.floor(rand);}}
