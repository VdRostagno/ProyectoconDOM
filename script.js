//DOM
console.dir(document);
console.dir(document.head);
console.dir(document.body);

//get element by id
const titulo =document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerHTML);


const parrafo =document.getElementById("parrafo");  
console.log(parro);
console.log(parrafo.innerHTML);

const footer = document.getElementById ("footer");
console.log(footer);
console.log(footer.innerHTML);

const shop =document.getElementById("shop");
console.log(shop);
console.log(shop.innerHTML);

const tabla =document.getElementById("tabla");
console.log(tabla);
console.log(tabla.innerHTML);

const formulariodecontacto =document.getElementById("formulariodecontacto");
console.log(formulariodecontacto);
console.log(formulariodecontacto.innerHTML);

const container =document.getElementsByClassName("container")
console.log(container);
console.log(container.innerHTML);

//Price con QUERY SELECTOR 
const nuevoElementoClass=document.querySelector(#shop .precio)

//ARRAY DE CARRITO DE COMPRAS

//Defino los ARRAY 
const productosConsultora = ["Generacion de presupuesto", "Hosting y dominio", "Diseño de sitio", "Desarrollo y mantenimiento de la web","SEO y analytic", "Servicios de CM", "Creacion de logos"]

for (let i = 0; i < 7; i++) {
    console.log(productosConsultora[i])
  }

  //Class de productos con multiplicacion de IVA 
class Productos {
    constructor(productos, precio) {
        this.productos  = productos.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//Declaro un array (vacio) de productos para almacenar objetos
const productos = [];
productos.push(new Producto("Generacion de presupuesto", "$1000"));
productos.push(new Producto("Hosting y dominio", "5000"));
productos.push(new Producto("Diseño de sitio", "3000"));
productos.push(new Producto("Desarrollo y mantenimiento de la web", "10000"));
productos.push(new Producto("SEO y analytic", "2000"));
productos.push(new Producto("Servicios de CM", "3000"));
productos.push(new Producto("Creacion de logos", "500"));

//Array con for para modificar los valores segun IVA 
for (const producto of productos)
    producto.sumaIva();


//simulador de productos

const productos= [
    {
    id:1,
    nombre:  'Creacion de logo',
    imagen:'img src="imagenes/creacion_logos.jpg"',
    precio: '$500',
   
   
    id: 2,
    nombre:'Desarrollo web',
    imagen:'img src="imagenes/desarrollo_web.png"',
    precio: '$10000',
   
   id: 3,
   nombre:'Diseño_sitio',
   imagen:'img src="imagenes/diseño_sitio.jpg"',
   precio: '$3000',

   id: 4,
   nombre:'Generacion de presupuestos',
   imagen:'img src="imagenes/generacion_presupuesto.jpg"',
   precio: '$1000',

   id: 5,
   nombre:'Hosting y dominio',
   imagen:'img src="imagenes/hosting_dominio.png"',
   precio: '$5000',

   id: 6,
   nombre:'Seo y analityc',
   imagen:'img src="imagenes/seo_analityc.jpg"',
   precio: '$2000',

   id: 7,
   nombre:'Servicio de CM',
   imagen:'img src="imagenes/servicio_cm.jpg"',
   precio: '$3000',
   }

 ]


 const container =documet.getElementsByClassName ("container")

for (const producto of productos) {
    let contenedor = document.createElement("li");
    //Definimos el innerHTML del elemento con una plantilla de texto
    container.innerHTML = `<h3> ID: ${productos.id}</h3>
                            <p>  Producto: ${productos.nombre}</p>
                            <b> $ ${productos.precio}</b>`;
    container.appendChild(container);
}
//CARRITO DE COMPRAS 
//DECLARACION DE VARIABLES

let productos = 0;
let cantidad = 0;
let precio = 0;
let iva = 1.21;
let total = 0;


//DECLARACION DE FUNCIONES 
const Iva = () => {
    precio = precio * 1.21;
}

const sumarTotal = () => {    //SE SUMAN LA CANTIDAD DE PRODUCTOS 
    precio = precio * cantidad;
}
const pedido = () => {  //SERVICIOS ENNUMERADOS + USO DE PARSEINT.

    while (productos <= 0 || productos < 7) {
        
        servicioBasico = parseInt(prompt('BIENVENIDO A RTAITO\n Seleccione por numeracion el/los servicios que desea contratar: \n 1 - Generacion de presupuesto - $1000 \n 2 - Hosting y dominio - $ 5000 \n 3 - Diseño de sitio - $3000 \n 4 - Desarrollo y mantenimiento de la web- $10000 \n 5 - SEO y analytic - $2000 \n 6 -Servicios de CM - $3000  \n 7 - Creacion de logos - $500 c/hora\n PRECIOS SIN IVA INCLUIDO \n '))

        switch (servicioBasico) {
            case 1:
                    productos = "Generacion de presupuesto";
                    precio = 1000;
                break;
            case 2:
                    productos = "Hosting y dominio" ;
                    precio = 5000 ;
                break;
            case 3:
                    productos = "Diseño de sitio" ;
                    precio = 3000 ;
                break;
            case 4:
                    productos = "Desarrollo y mantenimiento de la web" ;
                    precio = 10000 ;
            break;
            case 5:
                    productos = "SEO y analytic" ;
                    precio = 2000 ;
            break;
            case 6:
                    productos = "Servicios de CM" ;
                    precio = 3000 ;
            break;
            case 7:
                    productos = "Creacion de logos" ;
                    precio = 500 ;
            break;
        }
        while (cantidad <= 0) {
            cantidad = parseInt(prompt(`¿Cuantos servicios de ${productos} desea llevar?`))  //CANTIDAD DE SERVICIOS SELECCIONADOS 
            
        }
    }
}

//LLAMADO DE FUNCIONES CREADAS.
pedido();
Iva();
sumarTotal();

//TICKET AL USUARIO.
alert(`Detalle de su compra:\n${productos}\nCantidad: ${cantidad}\nTotal: $${precio}`)

//Eventos carrito de compras

let boton = document.getElementById("carrito")
boton.onclick = () =>{console.log("Usted a solicitado un servicio")}

let boton = document.getElementById("boton-vaciar")
boton.onclick = () =>{console.log("Usted a vaciado su carrito")}

 let boton = document.getElementById("añadirCarrito");
 boton.onclick = () => {console.log("Click")};
 


//Defino los Array y creo la clase de FORMULARIO DE CONTACTO con constructor 

const formulariodecontacto =["Nombre","Apellido","Mail","Servicio"]
class Usuario {
    constructor(Nombre, Apellido, Mail, Servicio) {
        this.Nombre  = Nombre.toUpperCase();
        this.Apellido = Apellido.toUpperCase();
        this.Mail = Mail.toUpperCase();
        this.Servicio = Servicio.toUpperCase();
    }}

//Creacion de usuario por medio de funcion
function Usuario (Nombre,Apellido,Mail,Servicio){
    this.Nombre = Nombre;
    this.Apeliido = Apellido;
    this.Mail= Mail;
    this.Servicio; 
} 

//Formulario que va a estar conectado con el formulario de contacto de la pagina

let preguntarNombre = prompt ("Nombre")
let preguntarApellido= prompt ("Apellido")
let preguntarMail= prompt ("Celular")
let preguntarServicio= prompt ("Servicio")

const nuevoUsuario1 = new Usuario (preguntarNombre, preguntarApellido, preguntarMail, preguntarServicio);

console.log(nuevoUsuario1)


//DOM, FORMULARIO E INPUTS 
document.getElementById("Nombre").value = Virginia;
document.getElementById("Apellido").value = Rostagno;
document.getElementById("Mail").value = vdrostagno
document.getElementById("Servicio").value = Generar;

//AGREGANDO EVENTOS - FORMULARIO DE CONTACTO 

let formulariodecontacto = document.getElementById("formulariodecontacto");
formulariodecontacto.addEventListener("submit", validarFormulario);
    
function validarFormulario(e){
   e.preventDefault();
   console.log("Formulario Enviado");    
}
let miFormulario      = document.getElementById("formulariodecontacto");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulariodecontacto = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulariodecontacto.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulariodecontacto.children[1].value); 
}
