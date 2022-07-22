'sas'.replace(/a/, '!'); // 's!s'
'x.e e.x'.replace(/x.e/, '!'); // '! e.x'
'aab'.replace(/a/g, '!'); // '!!b'
'hh huh huuuuh huuh'.replace(/hu+h/g, '!'); // 'hh ! ! !'
'hh huh huuuuh huuh'.replace(/hu*h/g, '!'); // '! ! ! !'
'hh huh huuuuh huuh'.replace(/hu?h/g, '!'); // '! ! huuuuh huuh'
'xabx xababx xaabbx'.replace(/x(ab)+x/g, '!'); // '! ! xaabbx'
'a+x appppx appx aaap'.replace(/a\+x/g, '!'); // '! appppx appx aaap'
'bb bab baaab baaaaaab'.replace(/ba{1,3}b/g, '!'); // 'bb ! ! baaaaaab'
'bb bab baaab baaaaaab'.replace(/ba{3,}b/g, '!'); // 'bb bab ! !'
let str = 'aeeex zzz x kkk';
let res = str.replace(/a.+?x/g, '!');
'1 12 123 abc @@@'.replace(/\d+/g, '!'); // '! ! ! abc @@@'
'aeeeez aGGGGz abz a@z'.replace(/a[a-zA-Z]+z/g, '!'); // '! ! ! a@z'
'ypc pcypcy CPY'.replace(/[ypc]+/g, '!'); // '! ! CPY'
'aaa aaa aaa'.replace(/^aaa/g, '!'); // '! aaa aaa'
'aaa aaa aaa'.replace(/aaa$/g, '!'); // 'aaa aaa !'
'axx bxx bbxx exx'.replace(/(a|b+)xx/g, '!'); // '! ! ! exx'
/^a+$/.test('aaaaaaaaaaaa'); // true
/^(http|https):\/\//.test('https://'); // true
/\.(txt|html|php)$/.test('bdgd.php'); // true
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test('you@yandex.org'); // true
'socks sicks suscks cks kkkscks'.match(/cks/gi) // [ 'cks', 'cks', 'cks', 'cks', 'cks' ]


// Найти сумму всех чисел данной строки
let task1 = 'a1b c34d x567z';
let resultTask1 = 'a1b c34d x567z'.match(/\d+/g).reduce((sum, current) => {
    return sum + +current;
}, 0);

console.log(resultTask1);