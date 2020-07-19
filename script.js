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
function erase(div) {
    let btn = document.querySelector('.btn')
    let enabled = true;
    btn.addEventListener('click', () => {
        enabled = !enabled
        console.log(enabled)
        detect()
    })
    function detect() {
        if (!enabled) {
            div.classList.add('erase')
        }
    }

}

let btn = document.querySelectorAll('.btn')
let green = document.querySelectorAll('.green')
    for (let i = 0; i < green.length; i++) {
        erase(btn[i])
        for (let j = 0; j < green.length; j++) {
            
        }
    }