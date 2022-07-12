const states = [
    {name: 'Alabama', capitol: 'Montgomery'},
    {name: 'Alaska', capitol: 'Juneau'},
    {name: 'Arizona', capitol: 'Phoenix'},
    // ...
];
for (const state of states) {
    console.log(state.capital);
    // ~~~~~~~ Property 'capital' does not exist on type
    // '{ name: string; capitol: string; }'.
    // Did you mean 'capitol'?
}

/*
 오타가 났지만 어느쪽이 오타인지 판명을 못함
 오류의 원인을 추측할 수 있지만 판명할 수없다.
 따라서 명시적으로 states를 선언하여 의도를 분명하게하는 것이 좋음
 */