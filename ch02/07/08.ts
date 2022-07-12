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
/*
name, birth, death 를 다 가지고 있어야함
 */
const a: PersonSpan = {
  name : 'a',
  birth: new Date(),
  death: new Date(),
}