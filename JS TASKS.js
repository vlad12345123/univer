
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

//6

var voltage = prompt("Введите напряжение");
debug(voltage, "number");
var amperage = prompt("Введите ток");
debug(amperage, "number");
alert(voltage/amperage);

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
