var name=prompt('введите cвое имя:');
var year=+prompt('год рождения:');
var child=+prompt('введите нынешний год');
if('Имя' + '' + name){
console.log('Имя'+ ' '+name +',' +'Год рождения ' +year+','+'Нынешний год '+''+child);
}
console.log(name+' '+'Ваш возраст' +(child-year));
alert(name+' '+'Ваш возраст' +(child-year));
//=============================  !!2 exercize!!!
var min=+prompt('fvjh,df');
var max=+prompt(';gyjfgv');
var amount=+prompt('Введите количество примеры:');
function run(min,max) {
    let num=Math.floor(Math.random()*(max+1-min)+min);
    return num;
}

for (let i = 0; i < amount; i++) {
    let num2=run(min,max);
    let num3=run(min,max);
    let pr=+prompt(num2+'+'+num3+'=');
    let answer=(num2+num3)==pr?'Молодец':'Ошибка';
    alert(num2+'+'+num3+'='+(num2+num3)+'Ваш ответ'+pr+'=>'+answer);
 
}


























