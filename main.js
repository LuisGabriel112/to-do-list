let titulo = document.getElementById( "titulo" );
let agregar = document.getElementById( "agregar" );
let eliminar = document.getElementById( 'eliminar' )
let editar = document.getElementById( 'editar' )
let textoA = document.getElementById( "texto" );
let listaPendientes = document.getElementById('listaP')
let ultimaTarea = listaPendientes.lastElementChild;
let textoValor = textoA.value
let list = []
let colores =  ["#f44336", "#e91e63","#9c27b0","#673ab7","#3f51b5","#6acee6","#d95726","#bb6b46"]
let numsIDS = 0
let editIDS = 0
titulo.innerHTML='TO DO LIST'


textoA.addEventListener("change", () => {
  textoValor = textoA.value;
  // Procesamos el nuevo valor del input
});

const prueba = () =>{
  swal({
    title: "Cambio hecho",
    icon: "success",
  });
}

const agregar_lista = () =>{
    let numeroN = Math.floor(Math.random() * colores.length);
    list.push(textoValor)
    const eEbtn = document.createElement('button');
    const creandoE = document.createElement('h2');
    listaPendientes.appendChild(creandoE);
    eEbtn.id="editar_btn";
    eEbtn.className ="btn btn-warning"
    eEbtn.addEventListener('click', editarLista)
    eEbtn.innerHTML = '🔀';
    creandoE.innerHTML = textoValor;
    creandoE.className = "listado"
    creandoE.id = `tarea_num_${numsIDS}`
    eEbtn.id = `edit_btn${editIDS}`
    eEbtn.style.marginLeft='10px'
    creandoE.style.backgroundColor= colores[numeroN]
    creandoE.appendChild(eEbtn)
    console.log(list);
    eEbtn.addEventListener('click', () => editarLista(eEbtn));
    creandoE.addEventListener('click', () => añadirBtn(creandoE));
    textoA.value="";
    numsIDS++
    editIDS++
}



const añadirBtn = (creandoE) =>{
  const eEbtn = document.createElement('button');
  eEbtn.id="editar_btn";
  eEbtn.addEventListener('click', editarLista)
  eEbtn.innerHTML = '🔀';
  creandoE.appendChild(eEbtn)
  eEbtn.className ="btn btn-warning"
  eEbtn.style.marginLeft='10px'
  eEbtn.addEventListener('click', () => editarLista(eEbtn));
}


const editarLista = (botonEdit) => {
  const idTarea = botonEdit.parentNode.id;
  const tarea = document.getElementById(idTarea);
  const nuevoTexto = prompt('Introduce el cambio');
  tarea.innerText = nuevoTexto;

  prueba();
};

 
const eliminar_lista = () => {
  list.pop();
  ultimaTarea = listaPendientes.lastElementChild; // Actualizar la referencia
  ultimaTarea.remove(); // Ahora sí elimina la última tarea
  numsIDS -= 1
}



agregar.addEventListener('click', agregar_lista,textoA)

eliminar.addEventListener('click', eliminar_lista)

