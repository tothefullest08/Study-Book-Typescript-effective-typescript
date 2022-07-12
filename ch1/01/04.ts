const states = [
    {name: 'Alabama', capital: 'Montgomery'},
    {name: 'Alaska', capital: 'Juneau'},
    {name: 'Arizona', capital: 'Phoenix'},
    // ...
];
for (const state of states) {
    console.log(state.capitol);
}

/*
자바스크립트에서는 undefined 발생
타입스크립트에서는 에러 발생
error TS2551: Property 'capitol' does not exist on type '{ name: string; capital: string; }'.
Did you mean 'capital'?
 */