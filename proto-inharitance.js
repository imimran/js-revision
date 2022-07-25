// prototype inharitance

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, team, type) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.team = team;
  this.type = type;

  this.play = function(){
    console.log(`${this.name} is playing`);
  }
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
};
Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constractor = Cricketer;

const sakib = new Cricketer("Sakib", 35, "BD", "Alrounder")
sakib.eat()
sakib.play()

