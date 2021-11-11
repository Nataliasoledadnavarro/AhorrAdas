/*//////////////////// Elementos ////////////////////////*/ ////
// MAQUETADO
const linkBalance = document.querySelector(".link-balance");
const linkCategorias = document.querySelector(".link-categorias");
const linkReportes = document.querySelector(".link-reportes");
const seccionPrincipal = document.querySelector("#principal");
const seccionCategorias = document.querySelector("#seccion-categorias");
const seccionReportes = document.querySelector(".reportes");
const menuDesplegableMobile = document.querySelector(
  "#menu-desplegable-mobile"
);
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const linkBalanceMobile = document.querySelector(".link-balance-mobile");
const linkCategoriasMobile = document.querySelector(".link-categorias-mobile");
const linkReportesMobile = document.querySelector(".link-reportes-mobile");

const seccionNuevaOperacion = document.getElementById(
  "formulario-nueva-operacion"
);
const seccionEditarCategoria = document.querySelector(
  "#seccion-editar-categorias"
);
const contenedorFiltros = document.querySelector("#contenedor-filtros");
const botonFiltros = document.querySelector("#boton-filtros");

//CATEGORIAS
const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const inputAgregarCategoria = document.getElementById(
  "input-agregar-categoria"
);
const botonAgregarCategoria = document.getElementById(
  "boton-agregar-categoria"
);
const contenedorCategoriaAgregada = document.getElementById("contenedor-categorias-agregadas")
const botonEditarCategoria = document.querySelector("#boton-editar-categoria");
const botonCancelarEditarCategoria = document.querySelector(
  "#boton-cancelar-editar-categoria"
);
//OPERACIONES
const seccionSinOperaciones = document.getElementById(
  "contenedor-sin-operaciones"
);
const seccionConOperaciones = document.getElementById(
  "contenedor-titulos-nuevas-operaciones"
);
const contenedorNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
);
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const botonCancelarNuevasOperaciones = document.getElementById(
  "boton-cancelar-nuevas-operaciones"
);
const botonAgregarNuevaOperacion = document.getElementById(
  "boton-agregar-nuevas-operaciones"
);
const contenedorListadoNuevasOperaciones = document.getElementById(
  "contenedor-listado-nuevas-operaciones"
);
const contenedorSinOperaciones = document.getElementById(
  "contenedor-sin-operaciones"
);
const itemNuevaOperacion = document.getElementById("item-nueva-operacion");

const inputDescripcionNuevaOperacion = document.getElementById(
  "descripción-nueva-operación"
);
const inputMontoNuevaOperacion = document.getElementById(
  "monto-nueva-operación"
);
const selectTipoNuevaOperacion = document.getElementById(
  "tipo-nueva-operacion"
);
const selectCategoriaNuevaOperacion = document.getElementById(
  "categoria-nueva-operacion"
);
const inputFechaNuevaOperacion = document.getElementById(
  "fecha-nueva-operación"
);

/////////////////////////////////// Función auxiliar ////////////////////////////////////////
const arraySecciones = [
  seccionPrincipal,
  seccionCategorias,
  seccionReportes,
  seccionNuevaOperacion,
  seccionEditarCategoria,
];

const mostrarSeccion = (array, seccion) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != seccion) {
      array[i].classList.add("is-hidden");
    } else if (array[i] === seccion) {
      array[i].classList.remove("is-hidden");
    }
  }
};

////// Links del NAV ///
linkReportes.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionReportes);
};

linkCategorias.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias);
};
linkBalance.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

/*//////////////////// Menú desplegable mobile ////////////////////////*/


botonHamburguesa.onclick = () => {
  botonHamburguesa.classList.toggle("is-active");
  menuDesplegableMobile.classList.toggle("is-active");
};

/*//////////////////// Ocultar filtros sección principal ////////////////////////*/

botonFiltros.onclick = (event) => {
  event.preventDefault();
  contenedorFiltros.classList.toggle("is-hidden");
  if (botonFiltros.textContent === "Ocultar filtros") {
    botonFiltros.textContent = "Mostrar filtros";
  } else {
    botonFiltros.textContent = "Ocultar filtros";
  }
};

/////////////////////*Funcionalidad boton nueva operación *//////////////////////////

botonNuevaOperacion.onclick = () => {
  mostrarSeccion(arraySecciones, seccionNuevaOperacion);
};

////* Boton cancelar seccion Nuevas operaciones *////
botonCancelarNuevasOperaciones.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

////* Boton agregar seccion Nuevas operaciones *////

botonAgregarNuevaOperacion.onclick = () => {
  mostrarSeccion(arraySecciones, seccionPrincipal);
};

////* Boton editar categorias *////

botonEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionEditarCategoria);
};

botonCancelarEditarCategoria.onclick = (event) => {
  event.preventDefault();
  mostrarSeccion(arraySecciones, seccionCategorias);
};

//INFORMACION CATEGORIAS//
const categorias = [
  "Todos",
  "Trabajo",
  "Comida",
  "Educación",
  "Transporte",
  "Servicios",
  "Salidas",
  "Alquiler",
];

// Funciones auxiliares
const guardarCategoriasLocalStorage = (array, clave) => {
  const nuevoObjeto = { categorias: array };
  const objetoJSON = JSON.stringify(nuevoObjeto);
  localStorage.setItem(clave, objetoJSON);
};

const traerCategoriasDesdeLS = (clave) => {
  const datosLocalStorage = localStorage.getItem(clave);
  const objetoLS = JSON.parse(datosLocalStorage);
  if (objetoLS === null) {
    return null;
  } else {
    return objetoLS.categorias;
  }
};

const capitalizar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

//AGREGAR ITEM CATEGORIA Y MOSTRARLO EN HTML
const agregarItemCategoria = (array) => {
  const itemAgregadoEnCategorias = array.reduce((acc, elemento, index) => {
    return acc + `<div class="columns is-mobile" id=categoria-agregada>
    <div class="column">
    <p class="tag is-primary is-light">${elemento}</p>
  </div>
  <div class="column is-flex is-justify-content-flex-end ">
    <button id="boton-editar-categoria-${index}"class="button is-ghost is-size-7">Editar</button>
    <button id="boton-eliminar-categoria-${index}"class="button is-ghost is-size-7">Eliminar</button>
  </div> 
  </div>`
  }, "")
  contenedorCategoriaAgregada.innerHTML = itemAgregadoEnCategorias
}

// AGREGAR CATEGORIA EN EL SELECT
const agregarCategoriaHTML = (categorias, select) => {
  const categoriasEnHTML = categorias.reduce((acc, categoria, index, array) => {
    return (
      acc +
      `<option value="${categoria}" id="categoria-${index}">${categoria}</option>`
    );
  }, "");

  select.innerHTML = categoriasEnHTML;

  guardarCategoriasLocalStorage(categorias, "categorias");
};


if (traerCategoriasDesdeLS("categorias") === null) {
  agregarCategoriaHTML(categorias, selectCategoria);
  agregarCategoriaHTML(categorias, selectCategoriaNuevaOperacion);
  agregarItemCategoria(categorias);
} else {
  agregarCategoriaHTML(traerCategoriasDesdeLS("categorias"), selectCategoria);
  agregarCategoriaHTML(
    traerCategoriasDesdeLS("categorias"),
    selectCategoriaNuevaOperacion
  );
  agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
}

// Boton agregar categoria
botonAgregarCategoria.onclick = (event) => {
  event.preventDefault();
  const categoriaCapitalizada = capitalizar(inputAgregarCategoria.value);
  const arrayDesdeLS = traerCategoriasDesdeLS("categorias");
  
  if (arrayDesdeLS.includes(categoriaCapitalizada)) {
    alert("Categoria ya existente!");
  } else {
    categorias.push(categoriaCapitalizada);
    guardarCategoriasLocalStorage(categorias, "categorias");
    agregarCategoriaHTML(traerCategoriasDesdeLS("categorias"), selectCategoria);
    agregarCategoriaHTML(
      traerCategoriasDesdeLS("categorias"),
      selectCategoriaNuevaOperacion
    );
    agregarItemCategoria(traerCategoriasDesdeLS("categorias"));
    inputAgregarCategoria.value = "";
  }
};

///////////////////* Funcion crear item de nueva operación *///////////////////////
const guardarOperacionesLocalStorage = (array, clave) => {
  const arrayJSON = JSON.stringify(array);
  localStorage.setItem(clave, arrayJSON);
};

const traerOperacionesDesdeLS = (clave) => {
  const datosLocalStorage = localStorage.getItem(clave);
  const operacionesDesdeLS = JSON.parse(datosLocalStorage);
  if (operacionesDesdeLS === null) {
    return null;
  } else {
    return operacionesDesdeLS;
  }
};

//// Información ////
let operaciones = traerOperacionesDesdeLS("operaciones")

//MOSTRAR OPERACIONES EN HTML - FUNCION AUXILIAR, CAMBIA EL COLOR DE LAS OPERACIONES EN HTML//

const colorDeMonto = (objeto) => {
  if (objeto.tipo === "gasto") {
    return "has-text-danger";
  } else {
    return "has-text-success";
  }
};

const mostrarOperacionesEnHTML = (array) => {

  const itemsOperaciones = array.reduce((acc,operacion) => {
    return  acc +
      `<div id="item-nueva-operacion" class="columns is-mobile">
    <p id="descripcion-item-operacion" class="column is-3 mr-0-mobile has-text-weight-semibold">${
      operacion.descripcion
    }</p>
    <div class="column is-3 is-6-mobile">
      <p id="categoria-item-operacion" class="tag is-primary is-light">${
        operacion.categoria
      }</p>
    </div>
    <p id="fecha-item-operacion" class="column is-2 is-hidden-mobile">${
      operacion.fecha
    }</p>
    <p id="monto-item-operacion" class="column is-2 is-3-mobile  has-text-weight-bold ${colorDeMonto(
      operacion
    )}">$${operacion.monto}
    </p>
    <div class="column is-2 is-3-mobile pt-0">
      <button id="boton-editar-item-operaciones" class="button is-ghost is-small pt-0 pb-0">Editar</button>
      <button id="boton-eliminar-item-operaciones" class="button is-ghost is-small pt-0">Eliminar</button> 
    </div>
    </div>`//agregar aca el identificador unico para los botones!
  },"");
  contenedorNuevasOperaciones.innerHTML = itemsOperaciones
}


// agregar operacion///
botonAgregarNuevaOperacion.onclick = (event) => {
  event.preventDefault();
  let operacion = {
    descripcion: inputDescripcionNuevaOperacion.value,
    categoria: selectCategoriaNuevaOperacion.value,
    fecha: inputFechaNuevaOperacion.value,
    monto: inputMontoNuevaOperacion.value,
    tipo: selectTipoNuevaOperacion.value,
  };
  operaciones.push(operacion);
  guardarOperacionesLocalStorage(operaciones, "operaciones");
  mostrarOperacionesEnHTML(traerOperacionesDesdeLS("operaciones"));
  mostrarSeccion(arraySecciones, seccionPrincipal);
  seccionSinOperaciones.classList.add("is-hidden");
  seccionConOperaciones.classList.remove("is-hidden");
  mostrarBalance(sumaGasto(), operacionesGanancia());
};

//////////////////////*Balance*//////////////////////////

const numeroGananciaBalance = document.querySelector("#numero-ganancias");
const numeroGastosBalance = document.querySelector("#numero-gastos");
const numeroTotalBalance = document.querySelector("#numero-total");

const operacionesGastos = operaciones.filter((elemento) => {
  return elemento.tipo === "gasto";
});

const sumaGastos = gastos.reduce((acc, elemento) => {
  return acc = acc + Number(elemento.monto)
}, 0);

numeroGastosBalance.innerHTML = `-$ ${sumaGastos}`;

const operacionesGanancias = operaciones.filter((elemento) => {
  return elemento.tipo === "ganancia";
});

const sumaGanancias = ganacia.reduce((acc, elemento) => {
  return (acc = acc + elemento.monto);
}, 0);

numeroGananciaBalance.innerHTML = `+$ ${sumaGanancias}`;

const total = (sumaGanancias, sumaGastos) => {
  let resultado = sumaGanancias - sumaGastos;
  if (resultado > 0) {
    numeroTotal.classList.add("has-text-success");
    return `+$ ${resultado}`;
  } else {
    let resultadoString = String(resultado);
    let stringCortado = resultadoString.slice(1);
    numeroTotal.classList.add("has-text-danger");
    return `-$ ${Number(stringCortado)}`;
  }
};
numeroTotalBalance.textContent = total(sumaGanancias, sumaGastos);


/////Filtros Seccion Categorias//////

const aplicarFiltros = () => {
  const tipo = selectTipo.value;

  const filtradoPorTipo = operaciones.filter((operacion) => {
    if (tipo === "Todos") {
      return operacion;
    }
    return operacion.tipo === tipo;
  });

  const categoria = selectCategoria.value;

  const filtradoFinal = filtradoPorTipo.filter((operacion) => {
    if (categoria === "Todos") {
      return operacion;
    }
    return operacion.categoria === categoria;
  });

  return filtradoFinal;
};

//////  Filtro por Tipo  //////

selectTipo.onchange = () => {
  const arrayFiltroTipo = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltroTipo);
};

/////  Filtrado por Categoria  /////

selectCategoria.onchange = () => {
  const arrayFiltradoFinal = aplicarFiltros();
  mostrarOperacionesEnHTML(arrayFiltradoFinal);
};

// funcion ordenar fechas
const inputFecha = document.querySelector("#input-fecha");

const ordenarFechas = (array)=>{
  const fechasOrdenadas = array.sort((a,b) =>{
    return new Date(b.fecha) - new Date(a.fecha)
  })

 const fechaFinal = fechasOrdenadas.map((operacion)=>{
   new Date(operacion.fecha).toLocaleDateString()
   return operacion 
  })
  return fechaFinal
};

mostrarOperacionesEnHTML(ordenarFechas(operaciones)) 

//funcion filtro fechas
const fechasNuevas = (operaciones)=>{
  const fechasSeccionadas = []
  for (let i = 0; i < operaciones.length; i++) {
    if (new Date(inputFecha.value) <= new Date(operaciones[i].fecha)){
      fechasSeccionadas.push(operaciones[i])
    }  
  }
  return fechasSeccionadas
};

//cuando se selecciona una fecha se ejecuta la funcion y muestar en html
inputFecha.onchange = () =>{
 const filtradoDeFechas = fechasNuevas(operaciones)
  mostrarOperacionesEnHTML(filtradoDeFechas)

  console.log(filtradoDeFechas)
  console.log(inputFecha.value)

};



