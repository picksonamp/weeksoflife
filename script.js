const scrollToResult = function() {
    const inputDate = document.getElementById('birthday-date').value
  
    const birthDay = new Date(inputDate); 

    const now = new Date()

    let over90years = new Date(now.getFullYear() - 90, now.getMonth(), now.getDay())

    // задаем условия расчета; отсекаем не валидные результаты 

    if (inputDate === '') return document.getElementById('alertText').innerHTML = 'Введите дату рождения! <span>&#128165</span>';

    if (birthDay.getTime() > now.getTime()) return document.getElementById('alertText').innerHTML = 'Введеная дата еще не наступила! Проверьте дату <span>&#128302</span>';

    if (birthDay.getTime() > (now.getTime() - 31536000000)) return document.getElementById('alertText').innerHTML = 'Вы слишком молоды. Вы не способны самостоятельно проверить эти данные <span>&#128118</span>';

    if (birthDay.getTime() < over90years.getTime()) return document.getElementById('alertText').innerHTML = 'Вы слачтливый человек. Вам более девяноста лет. Приносим наши извинения! Данный сервис не может Вам помочь <span>&#128293</span>';

    // очищаем графическое отображение недель

    document.getElementById('alertText').innerHTML = '';

    for (let i = 0; i < maxWeeks; i++) {
        const element = document.getElementById(`no${i}`)
        element.remove()
    }
     
    // задаем новый вид графического отображения 

    const secondsInWeek = 604800000;
        
    let inputWeeks = Math.trunc((now.getTime() - birthDay.getTime()) / secondsInWeek);

    for (let i = 0; i < maxWeeks; i++) {

        if (i < inputWeeks) {
            let createDiv = document.createElement('div')
            createDiv.setAttribute('class', 'black-weeks')
            createDiv.setAttribute('id', `no${i}`)
            container.append(createDiv)
        }
        else {
            let createDiv = document.createElement('div')
            createDiv.setAttribute('class', 'white-weeks')
            createDiv.setAttribute('id', `no${i}`)
            container.append(createDiv)
        }
    }

    // устанавливаем заголовок

   document.getElementById('enteredWeeks').innerHTML = inputWeeks
    
    let spr = document.getElementById('spr').innerHTML;

    if (inputWeeks % 10 === 1) {document.getElementById('spr').innerHTML = ' недель'}
        else 
            if ((inputWeeks % 10 > 1) && (inputWeeks % 10 < 5)) {document.getElementById('spr').innerHTML = ' недели'}
                else document.getElementById('spr').innerHTML = ' недель'

    // скроллинг на результат

    window.scrollTo({
        top: (document.documentElement.clientHeight > 750) ? document.documentElement.clientHeight * 0.9 : document.documentElement.clientHeight,
        left: 0,
        behavior: "smooth",
      });
}

const container = document.getElementById('container')

const birthDay = new Date(('1991-11-08')); 

const now = new Date()

const years = now.getFullYear() - birthDay.getFullYear() - 1 ;
const weeks = ((now.getMonth()) * 4) + Math.trunc(now.getDate() / 7)

const age = ((years * 52) + weeks);

const maxWeeks = 4680;

for (let i = 0; i < maxWeeks; i++) {

    if (i < age) {
    let createDiv = document.createElement('div')
    createDiv.setAttribute('class', 'black-weeks')
    createDiv.setAttribute('id', `no${i}`)
    container.append(createDiv)
    }
    else {
        let createDiv = document.createElement('div')
    createDiv.setAttribute('class', 'white-weeks')
    createDiv.setAttribute('id', `no${i}`)
    container.append(createDiv)
    }
}

// устанавливаем обработчик для "Enter" и кнопки "посчитать"

const calculate = document.getElementById('calculate')

document.addEventListener('keydown', function (event) {
    console.log(event.key)

    if (event.key == 'Enter') return scrollToResult()
})

calculate.onclick = scrollToResult;

// обработчик для кнопки 'backspace' и кнопки "назад"

document.addEventListener('keydown', function (event) {
    console.log(event.key)

    if (event.key == 'Backspace') return function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    
    }();
})
 
const back = document.getElementById('back-button')

back.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

}

// обнуление высоты скрола при перезагрузке страницы

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


/// блок скрипта для цитат

const qs = [
    'Обычные люди думают, как потратить время, великие люди думают, как его использовать.',
    'Время забирает все, хотите ли вы этого или нет.',
    'Чтобы быть незаменимой, нужно все время меняться.',
    'Время — сотворенная вещь. Сказать «У меня нет времени» — все равно что сказать «Я не хочу».',
    'Время не любит, когда его тратят впустую',
    'Человек, не знающий, что ему делать со своим временем, бессовестно отнимает чужое.',
    'Вы можете задержаться, но время не задержит.',
    "Каждая проходящая минута — это еще один шанс все изменить.",
    "Время — это самое длинное расстояние между двумя местами."
]

const as = ["Артур Шопенгауэр", "Стивен Кинг", 'Коко Шанель', 'Лао Дзы', "Генри Форд", 'Джейн Остин', 'Бенжамин Франклин', `к/ф "Ванильное небо"`, "Теннесси Уильямс"]

let i = 1; // для уменьшения/увеличения прозрачности

let counter = 0; // для подсчета итераций сменен цитат в блоках

document.getElementById('quote1').innerHTML = qs[counter];
document.getElementById('autor1').innerHTML = as[counter];

document.getElementById('quote2').innerHTML = qs[counter + 3];
document.getElementById('autor2').innerHTML = as[counter + 3];

document.getElementById('quote3').innerHTML = qs[counter + 6];
document.getElementById('autor3').innerHTML = as[counter + 6];

const readingTextTimer = setInterval(() => {

    i = 1;

    const opacity = setInterval(() => {

        console.log('начало затухания');

        document.getElementById('quote1').style.opacity = i;
        document.getElementById('autor1').style.opacity = i;

        document.getElementById('quote2').style.opacity = i;
        document.getElementById('autor2').style.opacity = i;

        document.getElementById('quote3').style.opacity = i;
        document.getElementById('autor3').style.opacity = i;

        i -= 0.05;
        // console.log(i);
    } , 10)

    const disapearTextTimer = setTimeout(() => {
        clearInterval(opacity)
        console.log('первый интревал остановлен');

        } , 500)

    setTimeout(() => {

        (counter === 2) ? counter = 0 : counter++

        console.log('начало появления');

        document.getElementById('quote1').innerHTML = qs[counter];
        document.getElementById('autor1').innerHTML = as[counter];

        document.getElementById('quote2').innerHTML = qs[counter + 3];
        document.getElementById('autor2').innerHTML = as[counter + 3];

        document.getElementById('quote3').innerHTML = qs[counter + 6];
        document.getElementById('autor3').innerHTML = as[counter + 6];

        const opacity2 = setInterval(() => {
            document.getElementById('quote1').style.opacity = i;
            document.getElementById('autor1').style.opacity = i;

            document.getElementById('quote2').style.opacity = i;
            document.getElementById('autor2').style.opacity = i;

            document.getElementById('quote3').style.opacity = i;
            document.getElementById('autor3').style.opacity = i;

            i += 0.05;
            // console.log(i);
        } , 10)
    
        const disapearTextTimer = setTimeout(() => {
            clearInterval(opacity2)
            
            } , 500)
    }, 700)

} , 10000)








