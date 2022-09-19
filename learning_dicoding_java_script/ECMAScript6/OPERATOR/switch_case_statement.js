let language = 'sukma';
let greeting = null;

switch (language) {
    case 'english':
        greeting ='good morning';
        break;
    case 'sukma':
        greeting = 'Bounjur!';
        break;
    case 'japanese':
        greeting = 'ohayo ghozaimazu';
        break;
    default:
        greeting ='selamat pagi';

}
console.log(greeting)