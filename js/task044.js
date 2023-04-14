/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const letters = text.toLowerCase().replace(/[^a-z]/g, '')
  return [...letters].map(letter => alphabet.indexOf(letter) + 1).join(' ')
}

/*Ця реалізація спочатку визначає alphabetрядок з усіма літерами алфавіту по порядку. Потім він перетворює введені дані textна нижній регістр і видаляє всі небуквені символи за допомогою регулярного виразу ( /[^a-z]/g).

Далі він використовує оператор розширення ( ...), щоб перетворити відфільтрований рядок на масив символів і застосовує метод mapдля перетворення кожної літери у відповідну позицію в алфавіті (шляхом віднімання індексу літери в рядку alphabetвід 1, оскільки масиви мають індекс 0). Нарешті, він об’єднує отриманий масив позицій у рядок, розділений пробілами, і повертає його.

Зауважте, що ця реалізація передбачає, що вхідний текст містить лише символи з набору символів ASCII (тобто англійський алфавіт). Якщо вхідний текст містить символи з інших алфавітів або сценаріїв, для їх правильної обробки може знадобитися більш складна реалізація.*/