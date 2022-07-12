interface State {
    name: string;
    capital: string;
}
const states: State[] = [
    {name: 'Alabama', capital: 'Montgomery'},
    {name: 'Alaska', capitol: 'Juneau'},
    // Did you mean to write 'capital'?
    {name: 'Arizona', capital: 'Phoenix'},
];
for (const state of states) {
    console.log(state.capital);
}