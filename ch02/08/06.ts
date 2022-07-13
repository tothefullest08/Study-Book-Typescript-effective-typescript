interface Person {
  first: string
  last: string
}
const p: Person = { first: 'Jane', last: 'Jacobs' }
//    -             ----------------------------- Values
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

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}


/*
클래스는 타입으로도 쓰이고, 값으로도 쓰인다.
 */