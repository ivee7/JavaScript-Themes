# The small cheat sheet project for repeating some JavaScript topics

|The project aims to simplify the repetition of sections and materials on JavaScript for both daily work and job interviews. It also focuses on non-standard and infrequent questions. Let's close the likely gaps with the goal of becoming JS masters!|![JS](./assets/images/JS.png)|
|---|---|

## The table of contents

* [Regular expressions](#Regular-expressions)
    + [Methods](#Methods)
* [Collections](#Collections)
* [LocalStorage](#LocalStorage)
* [Destructurization](#Destructurization)
* [Time](#Time)
* [Event](#Event)
    + [Delegation](#Delegation)
    + [Bubbling](#Bubbling)
    + [Propagation](#Propagation)
    + [Capturing](#Capturing)
* [JS Math](#JS-Math)
* [Context](#Context)
* [Manipulating DOM Elements](#Manipulating-DOM-Elements)
* [Working with Errors](#Working-with-Errors)
* [Working with Server](#Working-with-Server)
* [Must to Know](#Must-to-Know)
    + [Navigating through Directories](#Navigating-through-Directories)
    + [CommonJS & ES](#Commonjs--ES)
        - [CommonJS](#Common-JS)
        - [ES](#ES)
* [Canvas](#Canvas)



## Regular Expressions

**/ /** - ограничители регулярных выражений  
**.** - обозначает любой символ  
**/some regexp/g** - правило расположения модификатора  
**g** - модификатор, включающий режим глобального поиска и замены, с ним ищет все совпадения, а без него - только первое  
**i** - игнорирование регистра  
\ - обратный слэш для экранирования  
**|** - вариант 'или', позволяет разделить регулярку на несколько частей  
**( )** - скобочная группа
**^** - начало строки    
**$** - конец строки  
**\b** - граница слова  

Являются спецсимволами: **$ ^ . * + ? \ / {} [] () |**   
Не являются спецсимволами: **@ : , ' " ; - _ = < > % # ~ `& !**

Операторы (квантификаторы) повторения. Действуют на стоящий перед ними символ/группу символов:  

**\+** - один и более раз;  
**\*** - ноль или более раз;  
**?** - ноль или один раз, а также отменяет жадность  
**{2,5}** - от 2 до 5 (всё включительно)  
**{2,}** - от 2 и более  
**{10}** - 10 раз  

Группы символов:

**\d** - цифра от 0 до 9  
**\w** - цифра, латинская буква или знак подчёркивания  
**\s** - пробел или пробельный символ: пробел, перевод строки, табуляция

*Можно инвертировать*:   
если \d - цифра, то **\D** - не цифра;  
**\W** - не цифра, не латинская буква и не знак подчёркивания;  
**\S** - не пробельный символ.

Регулярные выражения по умолчанию **жадные**:
```
let str = 'aeeex zzz x kkk';
let res = str.replace(/a.+x/g, '!'); // Attention - '! kkk', not '! zzz x kkk'
```
*Чтобы ограничить жадность, нужно после оператора повторения поставить знак вопроса*:  
```
let str = 'aeeex zzz x kkk';
let res = str.replace(/a.+?x/g, '!'); // '! zzz x kkk'
```

Наборы:

**[ ]** - операция "или". Заменяют собой один символ, любой из перечисленных внутри. *Спецсимволы **внутри [ ]** становятся обычными символами. Это значит, что их **не надо экранировать** обратным слешем*. Исключения - [ ], ^, -. Если вам нужны квадратные скобки как символы внутри [ ] - то их нужно экранировать обратным слешем, cо шляпкой тоже самое, но также можно поставить не в начало и она станет обычным символом. Группы символов (\d, \W и т.д.) внутри [ ] будут оставаться командами.  

**^** - инвертирование наборов символов. **^** ставится в начало [ ], иначе он становится обычным символом.
```
[^ab] - не 'a', не 'b'. Все сиволы, кроме 'a' и 'b'

'xaz xbz xcz xez'.replace(/x[^abc]z/g, '!'); // 'xaz xbz xcz !'

'axx bxx ^xx dxx'.replace(/[d^]xx/g, '!'); // 'axx bxx ! !'
```

**-** - дефис тоже спецсимвол внутри [ ] (а вот снаружи - нет). Если вам нужен сам дефис как символ - то поставьте его там, где он *не будет воспринят как разделитель группы*.

Поставьте символ дефиса там, где он точно не будет воспринят как символ группы, например, в начале или в конце (то есть после [или перед ]). Можно также заэкранировать дефис - тогда он будет обозначать сам себя независимо от позиции. Например, вместо [:-@] написать [:\-@] - и группы уже не будет, а будут три символа - двоеточие, дефис и собака @.

Кириллица:

**[а-я]** - буква 'ё' не входит
**[а-яё]** - весь алфавит полностью

### Methods

**test()** - проверяет, есть ли в строке хотя бы одно совпадение с регуляркой. Возвращает либо true, либо false: *регулярка.test(где искать)*

**match()** - позволяет получить ту часть строки, которая попала под регулярное выражение: *str.match(regexp)*. С использованием модификатора g возвращает массив подстрок либо null, без g - массив с первым совпадением и информацией о нём

## Collections
## LocalStorage
## Destructurization
## Time
## Event
### Delegation
### Bubbling
### Propagation
### Capturing
## JS Math
## Context
## Manipulating DOM Elements
## Working with Errors
## Working with Server
## Must to Know
### Navigating through Directories
### CommonJS & ES
#### CommonJS
#### ES
## Canvas