// tsConfig: {"strictNullChecks":false}

document.querySelector('#myButton').addEventListener('click', e => {
  e.currentTarget // Type is EventTarget
  const button = e.currentTarget as HTMLButtonElement
  button // Type is HTMLButtonElement
})


const divEl = document.querySelector('#myButton')
if (divEl) {
  divEl.addEventListener('click', e => {
    e.currentTarget // Type is EventTarget
    const button = e.currentTarget as HTMLButtonElement
    button // Type is HTMLButtonElement
})}
