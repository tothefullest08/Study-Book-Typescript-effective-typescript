interface Person {
  name: string
}
const people: Person[] = ['alice', 'bob', 'jan'].map((name): Person => ({ name }))
console.log(people);


const people2 = ['alice', 'bob', 'jan'].map<Person>((name): Person => ({ name }))
console.log(people2);

const people3: Person[] = ['alice', 'bob', 'jan'].map((name) => ({ name }))
console.log(people3);


const nameArray: string[] = ['alice', 'bob', 'jan'];

const people4: Person[] = nameArray.map((name): Person => ({ name }))
console.log(people4);
