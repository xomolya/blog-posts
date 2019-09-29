var users = [{ name: 'Vasa', age: 25 }, { name: 'Pitya', age: 33 }, { name: 'Anya', age: 22 }];

/*var newUsers = users.map(function(item){
    return `<li>${item}</li>`;
});*/

/*var filteredUsers = users.filter((item)=> {
    if(item.age < 30) {
        return true;
    }
    return false;
})*/

filteredUsers = users.filter(item => item.age < 30)

console.log(filteredUsers);