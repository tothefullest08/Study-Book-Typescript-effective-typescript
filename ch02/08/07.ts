interface Person {
  first: string
  last: string
}
const p: Person = { first: 'Jane', last: 'Jacobs' }
//    -           --------------------------------- Values
//       ------ Type
function email(p: Person, subject: string, body: string): Response {
  //     ----- -          -------          ----  Values
  //              ------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder {
  radius = 1
  height = 1
}

const v = typeof Cylinder // value is "function"
type V = typeof Cylinder // Type is Cylinder

console.log(v);

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}
type T1 = typeof p // Type is Person
type T2 = typeof email
// Type is (p: Person, subject: string, body: string) => Response

const v1 = typeof p // Value is "object" 자바스크립트 런타입이므로 타입스크립트에서 추론 불가. 모든 6가지가 다뜸.
const v2 = typeof email // Value is "function"

// console.log(v1, v2);


/*
값으로써의 typeof
타입으로써의 typeof는 다르다.
 */