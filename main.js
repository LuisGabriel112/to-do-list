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

const agregar_lista = () =>{
    let numeroN = Math.floor(Math.random() * colores.length);
    list.push(textoValor)
    const eEbtn = document.createElement('button');
    const creandoE = document.createElement('h2');
    listaPendientes.appendChild(creandoE);
    eEbtn.id="editar_btn";
    eEbtn.addEventListener('click', editar_lista)
    eEbtn.innerHTML = '🔀';
    creandoE.innerHTML = textoValor;
    creandoE.className = "listado"
    creandoE.id = `tarea_num_${numsIDS}`
    eEbtn.id = `edit_btn${editIDS}`
    creandoE.style.backgroundColor= colores[numeroN]
    creandoE.appendChild(eEbtn)
    console.log(list);
    eEbtn.addEventListener('click', () => editar_lista(eEbtn));
    creandoE.addEventListener('click', () => añadirBtn(creandoE));
    textoA.value="";
    numsIDS++
    editIDS++
    textoValor=""
}



const añadirBtn = (creandoE) =>{
  const eEbtn = document.createElement('button');
  eEbtn.id="editar_btn";
  eEbtn.addEventListener('click', editar_lista)
  eEbtn.innerHTML = '🔀';
  creandoE.appendChild(eEbtn)
  eEbtn.addEventListener('click', () => editar_lista(eEbtn));
}

const editar_lista = (boton) => {
  Nvalor = boton.parentElement.innerText = textoValor;
  añadirBtn()
 }
 
const eliminar_lista = () => {
  list.pop();
  ultimaTarea = listaPendientes.lastElementChild; // Actualizar la referencia
  ultimaTarea.remove(); // Ahora sí elimina la última tarea
  numsIDS -= 1
}



agregar.addEventListener('click', agregar_lista,textoA)

eliminar.addEventListener('click', eliminar_lista)

