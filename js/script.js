const listaSpesa = [`acqua`, `patate`, `pomodori`, `insalata`, `zucchero`, `sale`];
console.log(listaSpesa);
const ul = document.querySelector(`.list`)
console.log(ul);

let i = 0
while (i < listaSpesa.length) {
    let spesa = listaSpesa[i];
    console.log(spesa);
    ul.innerHTML += `<li>${spesa}</li>`;
    i++;
}



