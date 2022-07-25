// class inharitance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play () {
    console.log(`${this.name} is playing`);
  };
}

class Cricketer extends Person {
  constructor(name, age, team, type) {
    super(name, age)
    this.name = name;
    this.age = age;
    this.team = team;
    this.type = type;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

const sakib = new Cricketer("Sakib", 35, "BD", "Alrounder")
sakib.eat()
sakib.play()
