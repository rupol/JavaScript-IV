// CODE here for your Lambda Classes
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    console.log(
      `Hello, my name is ${this.name} and I'm from ${this.location}.`
    );
  }
}

class Instructor extends Person {
  constructor(instructAttr) {
    super(instructAttr);
    this.specialty = instructAttr.specialty;
    this.favLanguage = instructAttr.favLanguage;
    this.catchPhrase = instructAttr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

class ProjectManager extends Instructor {
  constructor(PMattr) {
    super(PMattr);
    this.gradClassName = PMattr.gradClassName;
    this.favInstructor = PMattr.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, "@channel standup time!​​​​​"`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// people
const bill = new Person({
  name: "Bill Weasley",
  age: 27,
  location: "Ottery St. Catchpole"
});

const stanley = new Person({
  name: "Stanley Shunpike",
  age: 22,
  location: "London"
});

const petunia = new Person({
  name: "Petunia Dursley",
  age: 45,
  location: "Cokeworth"
});

// instructors
const hagrid = new Instructor({
  name: "Hagrid",
  age: 60,
  location: "the Forest of Dean",
  favLanguage: "JavaScript",
  specialty: "Care of Magical Creatures",
  catchPhrase: "Good on ya, Harry!"
});

const dumbledore = new Instructor({
  name: "Albus Dumbledore",
  age: 105,
  location: "Godric's Hollow",
  favLanguage: "Phoenix",
  specialty: "Transfiguration",
  catchPhrase: "One can never have enough socks."
});

// students
const neville = new Student({
  name: "Neville Longbottom",
  age: 15,
  location: "Hogwarts",
  previousBackground: "Herbology student",
  className: "WebPT8",
  favSubjects: ["Herbology", "Transfiguration", "Care of Magical Creatures"]
});

const ruth = new Student({
  name: "Ruth Poliakon",
  age: 29,
  location: "Denver",
  previousBackground: "Biology teacher",
  className: "iOS4",
  favSubjects: ["CSS", "LESS", "Entomology", "JavaScript"]
});

const luna = new Student({
  name: "Luna Lovegood",
  age: 14,
  location: "Devon",
  previousBackground: "Quibbler enthusiast",
  className: "UX9",
  favSubjects: ["Magizoology", "Study of Ancient Ruins", "Divination"]
});

// project managers
const percy = new ProjectManager({
  name: "Percy Weasley",
  age: 17,
  location: "Ottery St. Catchpole",
  favLanguage: "Java",
  specialty: "Being a dick",
  catchPhrase: "Out of the way, Head Boy coming through!",
  gradClassName: "CS2",
  favInstructor: "Cuthbert Binns"
});

const hermione = new ProjectManager({
  name: "Hermione Granger",
  age: 15,
  location: "Hampstead",
  favLanguage: "R",
  specialty: "Everything",
  catchPhrase: "It's Wing-gar-dium Levi-o-sa",
  gradClassName: "CS4",
  favInstructor: "Minerva McGonagall"
});

// console.log(bill);
// console.log(percy);
// console.log(neville);
// console.log(hagrid);

// person
bill.speak();
stanley.speak();
petunia.speak();

// instructor
hagrid.speak();
dumbledore.speak();
dumbledore.demo("");
hagrid.demo("blast-ended screwts");
hagrid.grade(hermione, "hippogriffs");
dumbledore.grade(luna, "Bertie Bot's Every Flavor Beans");

// student
neville.speak();
luna.speak();
neville.listsSubjects();
luna.PRAssignment("Divination");
neville.PRAssignment("Herbology");
neville.sprintChallenge("Potions");

// project manager
percy.speak();
hermione.speak();
hermione.demo("Tarantallegra");
percy.grade(neville, "being good");
hermione.grade(luna, "Bezoars");
hermione.standUp("CS6_Hermione");
percy.standUp("WebPT8_Percy");
percy.debugsCode(ruth, "Advanced CSS");
