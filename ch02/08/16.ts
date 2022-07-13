interface Person {
  first: string
  last: string
}
function email({ person, subject, body }: { person: Person; subject: string; body: string }) {
  console.log(person, subject, body);
}

// function email2({person: Person, subject: string, body: string}){
//  // Person이 타입이 아니라 값으로 쓰임
// }


/*
구조분해할당...
 */

const person2: Person = {
  first: "first",
  last: "last"
}
console.log(person2);

email({body: "", person: person2, subject: ""});
