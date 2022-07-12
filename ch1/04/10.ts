class C {
  foo: string
  constructor(foo: string) {
    this.foo = foo
  }
}

const c = new C('instance of C')
const d: C = { foo: 'object literal' } // OK!

console.log(d instanceof C); // false

/*
변수에 타입으로 클래스를 넣었을 때, 값은 인스턴스여야만 하는게 아니라,
인스턴스를 구성하는 값만 들어가면 문제없음
타입으로만 체크하므로, 인스턴스가 아니므로 오케이다...
 */