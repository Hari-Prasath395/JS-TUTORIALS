class Movie {
    constructor(title = "", studio = "", rating = "PG­") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    getPG(movies = [], rating = "") {
      return movies.filter((m) => m.rating === rating);
    }
  }
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
  const leo = new Movie("Leo", "7 screen studios", "PG");
  const vikram = new Movie("Vikram", "Raj Kamal", "PG");
  const avatar = new Movie("Avatar", "Eros", "PG13");
  const avengers = new Movie("Avenegrs", "Jelly Bean", "PG");
  
  let moviesList = [casinoRoyale, leo, vikram, avatar, avengers];
  // console.log(moviesList);
  
  console.log(casinoRoyale.getPG(moviesList, "R"));
  console.log(casinoRoyale.getPG(moviesList, "PG"));


  //Circle Class  Convert the UML diagram to Typescript class. - use number for double

class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle with radius ${this.radius} and color ${this.color}`;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const maths =new Circle(6,'green');
  console.log(maths.getArea());
  console.log(maths.getCircumference());
  console.log(maths.getColor());
  console.log(maths.setColor("Blue"));
  console.log(maths.getColor());
  console.log(maths);


  class Person {
    constructor(firstName, lastName, age, id) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.id = id;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
      return this.age;
    }
    getId() {
      return this.id;
    }
  }
  
  const person1 = new Person("Raja", "Ram", 21, 123);
  console.log(person1); //Person { firstName: 'Raja', lastName: 'Ram', age: 21, id: 123 }
  console.log(person1.getFullName()); //Raja Ram
  console.log(person1.getAge()); //21
  console.log(person1.getId()); //123