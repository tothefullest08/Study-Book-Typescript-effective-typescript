interface Identified {
  id: string
}
interface Person {
  name: string
}
interface Lifespan {
  birth: Date
  death?: Date
}
type PersonSpan = Person & Lifespan

// 유니온 타입의 값을 타입스크립트는 보장하지못함
type K = keyof (Person | Lifespan) // Type is never
// keyof (A&B) = (keyof A) | (keyof B)
// keyof (A|B) = (keyof A) & (keyof B)

// 유니온이므로 둘중 하나만 충족시키면 됨
type K2 = Person | Lifespan
const k2: K2 = {
  birth: new Date(),
  death: new Date(),
}
const k2_1: K2 = {
  name: 'name',
}

// and 조건이므로 둘다 만족해야함
type K3 = Person & Lifespan
const k3: K3 = {
  name: 'a',
  birth: new Date(),
}
