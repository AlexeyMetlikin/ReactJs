function* getQuestions() {
  let userName = yield 'Введите свое имя: ';
  let film = yield 'Введите любимый фильм: ';
  let food = yield 'Введите любимое блюдо: ';  
  return {
    userName: userName,
    film: film,
    food: food
  }
}

const questionGenerator = getQuestions();

var userName = prompt(questionGenerator.next().value, '');
var film = prompt(questionGenerator.next(userName).value, '');
var food = prompt(questionGenerator.next(film).value, '');
var user = questionGenerator.next(food).value;

console.log('Пользователь ' + user.userName + ', любимый фильм: ' + user.film + ', любимое блюдо: ' + user.food);