// // 1  Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите
// на экран символ 'a', символ 'b', символ 'e'.
//
// let str = 'abcde'
//
// console.log(str[0])
// console.log(str[1])
// console.log(str[4])


// // 2 Напишите скрипт, который считает количество секунд в часе
//
// const minute = 60
//
// const second = 60
//
// const hour = minute * second
//
// console.log(hour)


// // 3 Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
// // Количество строк кода при этом не должно измениться. Код для переделки:
//
// var num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);
//
// let newNum = 1
// newNum += 12
// newNum -= 14
// newNum *= 5
// newNum /= 7
// newNum++
// newNum--
//
// confirm(newNum)


//***  Работа с переменными  ***//

// // 1   Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с
// // помощью метода alert.
//
// const num = 3
//
// alert(num)


// // 2 Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
//
// let a = 10
// let b = 2
//
// document.write(a+b)
// document.write('<br>')
// document.write(a-b)
// document.write('<br>')
// document.write(a/b)
// document.write('<br>')
// document.write(a*b)
// document.write('<br>')
// document.write(a%b)
// document.write('<br>')
// document.write(Math.pow(a, b))


// // 3  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result.
// // Выведите на экран значение переменной result.
//
// let c = 15
// let d = 2
//
// let result = c + d
//
// console.log(result)


// // 4 Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
//
// let a = 10
// let b = 2
// let c = 5
//
//
// console.log(a+b+c)


// // 5 Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
// // Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную
// // result. Выведите на экран значение переменной result.
//
// let a = 17
// let b = 10
//
// let c = a - b
//
// let d = 7
//
// let result = c + d
//
// document.write(result)


//*** Работа со строками ***//

// // 1 Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
//
// let str = 'Привет, Мир!'
//
// document.write(str)


// // 2  Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк
// // выведите на экран фразу 'Привет, Мир!'.
//
// let str1 = 'Привет,'
// let str2 = '\nМир!'
//
// document.write(str1 + str2)


// // 3 Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
//
// let name = prompt('enter name')
//
//
// document.write(`Привет ${name}`)


// // 4 Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
//
// let age = +prompt('Выведите ваш возраст')
//
// console.log(`Мне ${age} лет!`)


// // // 5 Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
//
// let name = prompt('enter name', undefined)
//
// alert('your name -- ' + name)


// // 6  Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
//
// let num = +prompt('enter number')
//
// console.log(typeof num)
//
// if (num < 0 || num > 0) {
//     alert(Math.pow(num, 2))
// }
//  else {
//     alert('you enter not number!!!')
// }


//*** Обращение к символам строки ***//

// // 1  Создайте переменную str и присвойте ей значение 'abcde'.
// // Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
//
//
// let str  = 'abcde'
//
// alert(str[0])
// alert(str[2])
// alert(str[4])


// // 2 Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
//
// let num = '12345'
//
// let count;
//
// for (let i = 0; i < num.length; i++) {
//
//     if (count === undefined) {
//         count = (+num[0])
//
//     } else {
//       count *= num[i]
//     }
//
//     console.log(count)
// }


//   // code

// // 3 Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце
//
// let sec = 1
// let min = 60 * sec
// let hour = min * 60
// let day = hour * 24
// let mounth = day * 30 || day * 31 || day * 29
//
//
// console.log('second in hour: ' +hour)
// console.log('second in day: ' +day)
// console.log(`second in mounth: ${mounth}`)


// // 4 Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
//
// let hour = 18
// let minute = 3
// let sec = 40
//
// console.log(`${hour}:${minute}:${sec}`)
//
// let date = new  Date()
//
// console.log(date)


// // 5  Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
//
// let x = 23
// document.write(Math.pow(x, 2))


//  // 6 Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.
//
// var num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// alert(num);
//
// let n = 47
// n += 7
// n -= 18
// n *= 10
// n /= 15
// alert(n)


// // 7  Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.
//
// var num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// alert(num);
//
// let n = 10
// n++
// n++
// n--
// alert(n)


// ----------     // // *** Part 3 Задачи на основы работы с массивами и объектами *** // // -------------------------

// // 8 Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
//
// let mass = ['Привет, ', 'мир', '!']
//
// document.write(mass[0], mass[1], mass[2] + '<br>')
//
// // // OR
//
// for (const str of mass) {
//     document.write(str )
// }

// // 9 Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, '
// // (то есть вместо слова 'Привет, ' будет 'Пока, ').
//
// let arr = ['Привет, ', 'мир', '!']
//
// arr[0] = 'Пока'
//
// console.log(arr)
//
// // // OR
//
// let arr1 = ['Привет, ', 'мир', '!']
//
//
// arr1.shift()
// arr1.unshift('Пока')
//
// console.log(arr1)


// // 10  Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.
//
// var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
//
// console.log(obj.Петя)
// console.log(obj['Коля'])


// // 11 Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.
//
// let arr = [1, 2, 3, 4, 5]
//
// // // OR
//
// let num = 5
// let arr2 = []
//
// for (let i = 0; i < num; i++) {
// arr2.push(++i)
// --i
// }
//
// console.log(arr)
// console.log(arr2)


// // 12 ан многомерный массив arr: Выведите с его помощью слово 'голубой'.
//
// var arr = {
//     'ru':['голубой', 'красный', 'зеленый'],
//     'en':['blue', 'red', 'green'],
// };
//
// console.log(arr.ru[0])


// // 13 Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
//
// let arr = ['a', 'b', 'c']
//
// alert(arr)


// // 14  помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
//
// let arr = ['a', 'b', 'c']
//
// document.write(arr[0], arr[1], arr[2] + '<br>')
//
// // OR
//
// for (const string of arr) {
//     document.write(string + '<br>')
// }


// // 15 Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
//
// let arr = ['a', 'b', 'c', 'd']
//
// console.log(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`)


// // 16  Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// // Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
//
// let arr = [2, 5, 3, 9]
//
// let result = arr[0] * arr[1] + arr[2] * arr[3]
//
// console.log(result)


// // 17 Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как
// // свойство объекта:
//
// var obj = {a: 1, b: 2, c: 3}
//
// console.log(obj.c)
// console.log(obj['c'])


// // 18 Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
// // (понедельник - первый и т.д.). Выведите на экран текущий день недели.
//
// let week = {
//     0: 'пн',
//     1: 'вт',
//     2: 'cp',
//     3: 'чт',
//     4: 'пт',
//     5: 'сб',
//     6: 'нд'
// }
//
//
// console.log(week["0"])


// // 19 Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// // Выведите день недели, соответствующий значению переменной day.
//
// let week = {
//     1: 'пн',
//     2: 'вт',
//     3: 'cp',
//     4: 'чт',
//     5: 'пт',
//     6: 'сб',
//     0: 'нд'
// }
//
// let day = new Date().getDay()
//
// console.log(week[day])


// // 20  Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
//
// let arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
//
// console.log(arr[1][0])

// // -----
// let a = ['a', 'b', 'c']
//
// let str = ''
//
// for (let i = 0; i < a.length; i++) {
//     str += a[i]
// }
// console.log(str)
// // ----


// // 21 Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
//
// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
//
// console.log(obj.js[0])


// // 22 Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент,
// // являющийся массивом названий дней недели по-русски, а второй - по-английски.
// // Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).
//
// let leng = {
//     'ru':['пн', 'ср', 'чт'],
//     'en':['tue', 'mon', 'sat'],
// }
//
// console.log(leng.ru[0])
// console.log(leng.en[2])


// // 23  Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то),
// // а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day.
// // То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
//
// let lang = ['ru', 'en']
//
// let day = [['пн', 'вт', 'ср'], ['ts', 'mn', 'st']]
//
// console.log(lang[0] +':'+ day[0][2])


 // --------------- ------- // *** Задачи на конструкции if-else, switch-case в JavaScript *** //
