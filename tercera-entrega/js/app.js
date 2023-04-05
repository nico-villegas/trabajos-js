class ProductController {
    constructor() {
        this.listaProductos = []
    }

    async levantar() {
        let res = await fetch("../json/lista_productos.json")
        this.listaProductos = await res.json()
        this.mostrarEnDOM(contenedor_productos)
        this.eventoAñadirAlCarrito()
    }

    mostrarEnDOM(contenedor_productos) {
        //limpio
        contenedor_productos.innerHTML = ""
        //muestro toda la lista
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += `
            <div class="card" style="width: 18rem;" id="card-main">
                <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">
                        ${producto.descripcion}
                    </p>
                    <p class="card-text" id="precio">
                        $${producto.precio}
                    </p>
                    <button class="btn btn-primary" id="mate_Nro_${producto.id}">Añadir al carrito</button>
                </div>
            </div>
            `
        })
    }

    eventoAñadirAlCarrito() {
        this.listaProductos.forEach(e => {
            const agregarAlCarrito = document.getElementById(`mate_Nro_${e.id}`)

            agregarAlCarrito.addEventListener("click", () => {

                controladorCarrito.anadir(e)
                controladorCarrito.levantar()
                controladorCarrito.mostrarEnDOM(contenedor_carrito)
                Toastify({
                    text: "Producto añadido al carrito correctamente",
                    duration: 1500,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "#e47c5d",
                        color: "#ffcc99"
                    },
                }).showToast();
            })
        })
    }
}

class CarritoController {
    constructor() {
        this.listaCarrito = []
    }

    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaCarrito")

        if (obtenerListaJSON) {
            this.listaCarrito = JSON.parse(obtenerListaJSON)
        }
        this.totalProductos()
    }

    anadir(producto) {
        const enCarrito = this.listaCarrito.find((el) => el.id === producto.id)

        if (enCarrito) {
            enCarrito.cantidad++
            let arrFormatoJSON = JSON.stringify(this.listaCarrito)
            localStorage.setItem("listaCarrito", arrFormatoJSON)
        } else {

            this.listaCarrito.push(producto)
            let arrFormatoJSON = JSON.stringify(this.listaCarrito)
            localStorage.setItem("listaCarrito", arrFormatoJSON)
        }
        this.mostrarEnDOM(contenedor_carrito)

        this.totalProductos()
    }

    mostrarEnDOM(contenedor_carrito) {
        //limpio el contenedor
        contenedor_carrito.innerHTML = ""
        //muestro todo
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;" id="card-modal">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text">$${producto.precio}</p>
                            <p class"card-text">Cantidad: ${producto.cantidad}</p>
                            <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-danger"> Eliminar del Carrito </button>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    }


    limpiarCarrito() {
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
        this.mostrarEnDOM(contenedor_carrito)
        this.totalProductos()
    }

    totalProductos() {
        const totalProductos = document.getElementById('total_productos')
        let total = 0
        this.listaCarrito.forEach((producto) => {
            total += producto.precio * producto.cantidad
        })
        totalProductos.innerHTML = total
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
controladorCarrito.mostrarEnDOM(contenedor_carrito)



// Funcionalidades del carrito
const finalizarCompra = document.getElementById("finalizar_compra")
finalizarCompra.addEventListener("click", () => {
    if (controladorCarrito.listaCarrito.length > 0) {
        controladorCarrito.limpiarCarrito()
        Swal.fire({
            position: 'center',
            icon: 'success',
            iconColor: '#e47c5d',
            title: '¡Compra realizada!',
            color: '#ffcc99',
            background: '#142b3b',
            showConfirmButton: false,
            timer: 2000
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            iconColor: '#e47c5d',
            title: '¡Oops, el carrito está vacio!',
            color: '#ffcc99',
            background: '#142b3b',
            showConfirmButton: false,
            timer: 2500
        })
    }


})

const eliminarDelCarrito = (id) => {
    const producto = controladorCarrito.listaCarrito.find((producto) => producto.id === id)
    controladorCarrito.listaCarrito.splice(controladorCarrito.listaCarrito.indexOf(producto), 1)
    controladorCarrito.mostrarEnDOM(contenedor_carrito)
    let arrFormatoJSON = JSON.stringify(controladorCarrito.listaCarrito)
    localStorage.setItem("listaCarrito", arrFormatoJSON)
    controladorCarrito.totalProductos()
};
