function App(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

let app = new App("Саманчынын жолу", "Чынгыз Айтматов", "1963");
let block1 = new App("Биринчи мугалим", "Чынгыз Айтматов", "1957");
let block2 = new App("Золотая рыбка", "Александр Сергеевич Пушкин", "1843");

app.getSummary = function () {
  console.log(`${this.name} написана ${this.author} в ${this.year} году`);
};

block1.getSummary = function () {
  console.log(`${this.name} написана ${this.author} в ${this.year} году`);
};

block2.getSummary = function () {
  console.log(`${this.name} написана ${this.author} в ${this.year} году`);
};

app.getSummary();
block1.getSummary();
block2.getSummary();

let object = {
  name: "Саманчынын жолу",
  author: "Чынгыз Айтматов",
  year: "1963",
  getSummary: function () {
    console.log(`${this.name} написана ${this.author} в ${this.year} году`);
  },
};

object.getSummary();

function AppStudent(name, grade) {
  this.name = name;
  this.grade = grade;
  this.study = function () {
    console.log(`${this.name} - ${this.grade} класта окуп жатат`);
  };
}
let student = new AppStudent ("Asan", 11)
student.study();