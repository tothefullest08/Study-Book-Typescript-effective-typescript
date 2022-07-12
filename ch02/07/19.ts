type T = Exclude<string | Date, string | number> // Type is Date
type NonZeroNums = Exclude<number, 0> // Type is still just number

let nonzeronum: NonZeroNums = 0;
/*
타입스크립트에서 제공하는 유틸리티 타입인 Exclude 사용
좌측의 타입에서 우측의 유니언 타입 제거
 */