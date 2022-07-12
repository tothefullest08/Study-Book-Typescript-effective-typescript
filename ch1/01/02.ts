let city = 'new york city';

// typescript type checker
// 런타임 전에 오류가 발생될 수 있는 부분을 미리 체크
// error TS2551: Property 'toupperCase' does not exist on type 'string'. Did you mean 'toUpperCase'?
// console.log(city.toupperCase());

console.log(city.toUpperCase());