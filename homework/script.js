
// Выведите на экран правильное сообщение, которое берет значение из input
let age = document.getElementById('age');
function showUser(surname, name) {
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
console.log(showUser.apply(age, ['Nzaou','Lunel']));