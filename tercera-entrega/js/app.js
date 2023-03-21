class ProductController {
    constructor() {
        this.listaProductos = []
    }

    levantar() {
        let listaProductoJSON = localStorage.getItem("listaProductos")

        if (listaProductoJSON) {
            this.listaProductos = JSON.parse(listaProductoJSON)
        }
    }

    mostrarEnDOM(contenedor_productos) {
        //limpio
        contenedor_productos.innerHTML = ""
        //muestro toda la lista
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">
                        ${producto.descripcion}
                    </p>
                    <p class="card-text">
                        ${producto.precio}
                    </p>
                    <a href="#" class="btn btn-primary" id="mate_Nro_${producto.id}">Añadir al carrito</a>
                </div>
            </div>
            `
        })
    }
}

class CarritoController{
    constructor(){
        this.listaCarrito = []
    }

    levantar(){
        let obtenerListaJSON = localStorage.getItem("listaCarrito")

        if(obtenerListaJSON){
            this.listaCarrito = JSON.parse(obtenerListaJSON)
        }
    }

    anadir(producto){
        this.listaCarrito.push(producto)
        let arrFormatoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito",arrFormatoJSON)
    }

    mostrarEnDOM(contenedor_carrito){
        //limpio el contenedor
        contenedor_carrito.innerHTML = ""
        //muestro todo
        this.listaCarrito.forEach( producto => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text">$${producto.precio}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    }

    limpiarCarrito(){
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
        this.mostrarEnDOM(contenedor_carrito)
    }
}

//Objetos controladores
const controladorProductos = new ProductController()
const controladorCarrito = new CarritoController()

//Verificar STORAGE
controladorProductos.levantar()
controladorCarrito.levantar()

//DOM
const contenedor_productos = document.getElementById("contenedor_productos")
const contenedor_carrito = document.getElementById("contenedor_carrito")

//APP JS
controladorProductos.mostrarEnDOM(contenedor_productos)
controladorCarrito.mostrarEnDOM(contenedor_carrito)

//Añadimos Eventos a los botones de cada CARD
controladorProductos.listaProductos.forEach( producto => {
    const agregarAlCarrito = document.getElementById(`mate_Nro_${producto.id}`)

    agregarAlCarrito.addEventListener("click",()=>{
        
        controladorCarrito.anadir(producto)
        controladorCarrito.levantar()
        controladorCarrito.mostrarEnDOM(contenedor_carrito)
    })
})

const finalizarCompra = document.getElementById("finalizar_compra")
finalizarCompra.addEventListener("click", () =>{
    controladorCarrito.limpiarCarrito()
})