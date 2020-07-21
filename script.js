// TASK 1
let sum = document.querySelector('.sum')
sum.addEventListener('click', (event) => {
    event.preventDefault()
    let valueFirst = Number(document.querySelector('.valueFirst').value)
    let valueSecond = Number(document.querySelector('.valueSecond').value)
    if ((valueFirst === 0 || valueSecond === 0) || valueFirst && valueSecond) {
        let sumMain = document.createElement('div')
        sumMain.innerHTML = `${valueFirst} + ${valueSecond} = ${valueFirst + valueSecond}`
        document.body.prepend(sumMain)
    }
})

// TASK 2
let zero = document.querySelector('.increase') 
zero.addEventListener('click', () => {
    zero.innerText = parseInt(zero.innerText) + 1
})

// TASK 3
let add = document.querySelector('.add')
add.addEventListener('click', (event) => {
    event.preventDefault()
    let image = document.querySelector(".image").value
    let newImage = document.createElement('div')
    let form = document.querySelector('.form')
    newImage.style.display = 'flex'
    newImage.innerHTML = `<img src="${image}" style="width:200px">`
    form.prepend(newImage)
})

// TASK 4
let btn = document.querySelectorAll('.btn')

for (let i = 0; i < btn.length; i++) {
    erase(btn[i])
}

function erase(div) {
    div.addEventListener('click', () => {
        div.closest('div').classList.add('erase')
    })
}

// TASK 5
let list = document.querySelectorAll('.list__item')
for (let i = 0; i < list.length; i++) {
    choose(list[i])
}

function choose(div) {
    div.addEventListener('click', () => {
        div.classList.toggle('blue')
        console.log(div)
    })
}

