const names = ['Alice', 'Bob'];
// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
console.log(names[2].toUpperCase());

/*
타입스크립트 타입 체커를 통과하더라도 여전히 런타임 에러는 발생할 수 있다.
 */