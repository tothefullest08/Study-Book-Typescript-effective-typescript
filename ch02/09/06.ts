interface Person {
  name: string
}
const people = ['alice', 'bob', 'jan'].map(name => ({} as Person))
// No error
/*
사용처에서는 Person이라고 생각하고 쓸텐데, 아니므로 오류가 발생할 수 있음
 */

console.log(people);

