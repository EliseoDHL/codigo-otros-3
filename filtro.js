// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementsById("lista-de-productos"); //Se tiene que llamar al archivo por ID ya que en el HTML esta nombrado por ID
const $i = document.getElementsById('input'); //Se cambia el query selector por un getElement y en el html se agrego el Id de input

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d);
}

//displayProductos(productos)

const botonDeFiltro = document.getElementById("button"); //Se manda a llamar al boton pero lo haremos con un id, asi que cambiaremos el query selector por un get element


botonDeFiltro.onclick = function() { //Funcion que permite la activacion del boton con un click
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value; //El valor del input es guardado en esta constante y luego se muestra abajo con un console.log
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto ); 

  for (let i = 0; i < productosFiltrados.length; i++) { //Aqui es donde se va a crear los div, parrafos e imagenes, a la imagen se le anexa un atributo src que es de donde sacara la image
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  