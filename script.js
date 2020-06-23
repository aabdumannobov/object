const users = {};
for(let i = 1;  i < 11; i++){
    let names = prompt('Введите имя');
    let agee = +prompt('Введите возвраст');
    users[i] = {
          name: names,
          age: agee
         }
         
             
            
        }
        console.log(users);