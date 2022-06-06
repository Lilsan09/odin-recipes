console.log('js loadeds')

const lasagne = document.getElementById('lasagne')

const lasagne_de_base = lasagne.innerHTML

console.log(lasagne)

lasagne.addEventListener('mouseenter', e =>{
   // lasagne.innerHTML = "<button><a href='../odin-recipes/recettes/lasagne.html'>45 min</a></button>"
    lasagne.innerHTML = ""
let button = document.createElement('a')
button.href = "../odin-recipes/recettes/lasagne.html"
button.innerHTML = "45 min"
lasagne.appendChild(button)

})

lasagne.addEventListener('mouseleave', e =>{
    console.log('coucou')
    lasagne.innerHTML = lasagne_de_base
})