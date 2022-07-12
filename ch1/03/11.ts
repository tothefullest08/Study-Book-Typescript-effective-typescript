// tsConfig: {"noImplicitAny":false}

function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a, b) {
  return a + b
}

const three = add(1, 2) // Type is number
const twelve = add('1', '2') // Type is string

/*
함수 오버로딩 불가
타입 오버로딩은 가능 as function overloading
 */