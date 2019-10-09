// CODE here for your Lambda Classes
class Person {
  constructor (attributes) {
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
  }
  speak () {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructors extends Person {
  constructor (instructorAttributes ) {
    super(instructorAttributes)
    this.specialty = instructorAttributes.specialty
    this.favLanguage = instructorAttributes.favLanguage
    this.catchPhrase = instructorAttributes.catchPhrase
  }
  demo (subject) {
    console.log(`Today we are learning about ${subject}`)
    return `Today we are learning about ${subject}`
  }
  grade (students, subject) {
    console.log(`${students.name} receives a perfect score on ${subject}`)
    return `${students.name} receives a perfect score on ${subject}`
  }
}

class Students extends Person {
  constructor (studentsAttributes) {
    super(studentsAttributes)
    this.previousBackground = studentsAttributes.previousBackground
    this.className = studentsAttributes.className
    this.favSubjects = studentsAttributes.favSubjects
  }
  listsSubjects () {
    console.log(`${this.favSubjects}`)
  }
  PRAssignment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }
  sprintChallenge (subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManagers extends Instructors {
  constructor (pmAttributes) {
    super(pmAttributes)
    this.gradClassName = pmAttributes.gradClassName
    this.favInstructor = pmAttributes.favInstructor
  }
  standUp (channel) {
    console.log(`${this.name} announces to ${channel}, study times!`)
  }
  debugsCode (student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}


////////////////////////////////
const stark = new Instructors({
  name: 'Tony',
  age: '48',
  location: 'New York City',
  gender: 'Male',
  specialty: 'Object Oriented Programming',
  favLanguage: 'Starkscript',
  catchPhrase: 'I am Iron Man.',
  pronoun: 'his'
});

const vision = new ProjectManagers({
  name: 'The Vision',
  age: '3',
  location: 'the Internet',
  gender: '404: gender not found',
  specialty: 'Computer Architecture',
  favLanguage: 'Python',
  catchPhrase: 'Challenge incites conflict, and conflict breeds catastrophe.',
  gradClassName: 'CS13',
  favInstructor: 'J.A.R.V.I.S',
  pronoun: 'his'
});

const parker = new Students({
  name: 'Peter',
  age: '15',
  location: 'Queens',
  gender: 'Male',
  previousBackground: 'Arachnology',
  className: 'CS62',
  favSubjects: ['Parkour', 'Theatre', 'Biology'],
  grade: 92,
  pronoun: 'his'
});

const leeds = new Students({
  name: 'Ned',
  age: '15',
  location: 'Queens',
  gender: 'Male',
  previousBackground: 'Guy in the Chair',
  className: 'CS62',
  favSubjects: ['GPS', 'Google', 'Bluetooth'],
  grade: 50,
  pronoun: 'his'
});

const princess = new Students({
  name: 'Shuri',
  age: '16',
  location: 'Wakanda',
  gender: 'Female',
  previousBackground: 'Science',
  className: 'CS62',
  favSubjects: ['Infinitystattributessectemy', 'Data Science', 'Holograms'],
  grade: 9001,
  prounoun: 'her'
});


console.log(stark);
console.log(vision);
console.log(parker);
console.log(leeds);
console.log(princess);
console.log(stark.location);
// console.log(vision.gender);
console.log(parker.previousBackground);
console.log(stark.speak());
console.log(vision.speak());
console.log(princess.speak());
console.log(parker.listsSubjects());
console.log(stark.favLanguage);
console.log(stark.demo('hacking into government databases'));
console.log(stark.grade(parker, 'artificial intelligence communications'));
// console.log(vision.standup('cs62_memesquad'));
console.log(vision.debugsCode(parker, 'Javascript'));
console.log(princess.PRAssignment('CSS'));
console.log(parker.sprintChallenge('React'));
console.log(stark.catchPhrase);
console.log(vision.catchPhrase);
console.log(vision.favInstructor);
console.log(parker.grade);

