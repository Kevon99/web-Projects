const plus = document.querySelector("#plus")
const rest = document.querySelector("#rest")
const input = document.querySelector("#input")
const input2 = document.querySelector("#input2")
const x = document.querySelector("#x")
const divisor = document.querySelector("#divisor")
const resultado = document.querySelector("#response")


plus.addEventListener('click', () => {
    numero1 = Number(input.value)
    numero2 = Number(input2.value)

    let response = numero1 + numero2
    
    document.getElementById("response").value = response

})


rest.addEventListener('click', () => {
    numero1 = Number(input.value)
    numero2 = Number(input2.value)

    let response = numero1 - numero2

    document.getElementById("response").value = response
})

x.addEventListener('click', () => {
    numero1 = Number(input.value)
    numero2 = Number(input2.value)

    let response = numero1 * numero2

    document.getElementById("response").value = response
})

divisor.addEventListener('click', () => {
    numero1 = Number(input.value)
    numero2 = Number(input2.value)

    let response = numero1 / numero2

    document.getElementById("response").value = response
})