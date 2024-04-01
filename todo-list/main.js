let titulo = document.getElementById( "titulo" );
let agregar = document.getElementById( "agregar" );
let eliminar = document.getElementById( 'eliminar' )
let editar = document.getElementById( 'editar' )
let textoA = document.getElementById( "texto" );
let listaPendientes = document.getElementById('listaP')
let ultimaTarea = listaPendientes.lastElementChild;
let textoValor = textoA.value
let list = []
let colores =  ["#f44336", "#e91e63","#9c27b0","#673ab7","#3f51b5"]
let numsIDS = 0
titulo.innerHTML='TO DO LIST'

let numeroN = Math.floor(Math.random() * 5);

textoA.addEventListener("change", () => {
  textoValor = textoA.value;
  // Procesamos el nuevo valor del input
});


const agregar_lista = () =>{
    list.push(textoValor)
    const creandoE = document.createElement('h2');
    listaPendientes.appendChild(creandoE);
    creandoE.innerHTML = textoValor;
    creandoE.className = "listado"
    creandoE.id = `${numsIDS}`
    creandoE.style.backgroundColor= colores[numeroN]
    console.log(list);
    textoA.value="";
    numsIDS++
}

const eliminar_lista = () => {
  list.pop();
  ultimaTarea = listaPendientes.lastElementChild; // Actualizar la referencia
  ultimaTarea.remove(); // Ahora sí elimina la última tarea
}

const editar_lista = () => {
  console.log('Modo edicion');
  let ultimaTareaalv = document.getElementById(`${numsIDS - 1}`)
  ultimaTareaalv.innerHTML = textoValor;
}


agregar.addEventListener('click', agregar_lista,textoA)

eliminar.addEventListener('click', eliminar_lista)

editar.addEventListener('click', editar_lista)