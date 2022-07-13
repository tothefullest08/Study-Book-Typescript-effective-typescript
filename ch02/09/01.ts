interface Person {
  name: string
}

const alice: Person = { name: 'Alice' } // Type is Person - 타입 선언. 너는 Person이어야만 하고, 아니먼 오류를 낼거야
const bob = { name: 'Bob' } as Person // Type is Person - 타입 단언. 니가 뭐든간에 난 Person으로 볼거야



