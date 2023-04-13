
const chilometri = document.querySelector('.input2')
const age = document.querySelector('.input3')
const bottone = document.querySelector('.genera')
const nameTicket = document.querySelector('.input1')


bottone.addEventListener('click', function(){
    if (age.value < 18){
        const price = chilometri.value * 0.21
        const discount_young = price - (price * 20 / 100)
        document.querySelector('.result').innerHTML = discount_young.toFixed(2) + `€`
        document.querySelector('.name-coll').innerHTML = nameTicket.value
        document.querySelector('.offerta').innerHTML = 'Biglietto Young'
        document.querySelector('.carrozza').innerHTML = (Math.random(1) * 9).toFixed(0)
        document.querySelector('.cp-code').innerHTML = (Math.random(1) * 99999).toFixed(0)

    }
    else if (age.value >= 65){
        const price = chilometri.value * 0.21
        const discount_senior = price - (price * 40 / 100)
        document.querySelector('.result').innerHTML = discount_senior.toFixed(2) + `€`
        document.querySelector('.name-coll').innerHTML = nameTicket.value
        document.querySelector('.offerta').innerHTML = 'Biglietto Over 65'
        document.querySelector('.carrozza').innerHTML = (Math.random(1) * 9).toFixed(0)
        document.querySelector('.cp-code').innerHTML = (Math.random(1) * 99999).toFixed(0)
    }
    else{
        const price = chilometri.value * 0.21
        document.querySelector('.result').innerHTML = price.toFixed(2) + `€`
        document.querySelector('.name-coll').innerHTML = nameTicket.value
        document.querySelector('.offerta').innerHTML = 'Biglietto Standard'
        document.querySelector('.carrozza').innerHTML = (Math.random(1) * 9).toFixed(0)
        document.querySelector('.cp-code').innerHTML = (Math.random(1) * 99999).toFixed(0)
    }
})

const annulla = document.querySelector('.annulla')


annulla.addEventListener('click', function(){
    document.querySelector('.input1').value = ``;
    document.querySelector('.input2').value = ``;
    document.querySelector('.input3').value = ``;
    document.querySelector('.result').innerHTML = ``;
    document.querySelector('.name-coll').innerHTML = ``;
    document.querySelector('.offerta').innerHTML = ``;
    document.querySelector('.carrozza').innerHTML = ``;
    document.querySelector('.cp-code').innerHTML = ``;
})


