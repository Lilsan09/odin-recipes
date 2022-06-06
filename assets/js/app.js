///////// Bouton Lasagne /////////

const lasagne = document.getElementById('lasagne')

const lasagne_de_base = lasagne.innerHTML

lasagne.addEventListener('mouseenter', e =>{
    lasagne.innerHTML = ""
let button = document.createElement('a')
button.href = "../odin-recipes/recettes/lasagne.html"
button.innerHTML = "45 min"
lasagne.appendChild(button)

})

lasagne.addEventListener('mouseleave', e =>{
    lasagne.innerHTML = lasagne_de_base
})

/////// Bouton Grattin de courgette ////////

const grattin = document.getElementById('grattin')

const grattin_de_base = grattin.innerHTML

grattin.addEventListener('mouseenter', e =>{
    grattin.innerHTML = ""
let button = document.createElement('a')
button.href = "../odin-recipes/recettes/grattincourgette.html"
button.innerHTML = "20 min"
grattin.appendChild(button)
})

grattin.addEventListener('mouseleave', e =>{
    grattin.innerHTML = grattin_de_base
})
