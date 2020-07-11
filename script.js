// база пользователей

let num = +prompt('сколько пользователей вы хотите добавить');
while (num == 0 && isNaN(num)) {
    num = +prompt('вы ввели не правильно введите заного');
}

let dataBase = {};

for (let i = 1; i <= num; i++) {
   
    let clientName = prompt('введите имя пользователя');
    let clientAge = +prompt('введите возраст пользователя');
    
    dataBase[i] = {
         name: clientName,
         age: clientAge
     }
     console.log(`Имя пользователя  ${clientName}`);
     console.log(`Возраст пользователя  ${clientAge} лет `) ;
     
}


console.log(dataBase);

 

// корзина заказа

 /* let zakaz = cartObj();
let menu = 'Вы заказвли ';
let priceSum = 0;
let dostavka = 9000;

for(const key in zakaz) {
    menu += key + ' ' + zakaz[key].info + ', ';
    priceSum += zakaz[key].price;
}

priceSum += dostavka;

let clientList = menu + ' | Общая сумма ' + priceSum + ' сумм, c доставкой (9000) ';

console.log(clientList);

 */

