/* 
    Alumno: Nicolás Villegas

    El programa es un carrito de compras en donde debe realizar las siguientes acciones:

    1. Agregar productos al carrito.

    2. Mostrar el detalle de los productos con el total a pagar.

    3. Comprar dicho carrito.

    4. Eliminar productos del carrito
*/


class Producto{
    constructor(id,name,price){
        this.id = id
        this.name = name
        this.price = price
    }

    description(){
        return `Producto: ${this.name}
                \nPrecio: $${this.price}
                `
    }
}

class ProductController{
    constructor(listaProductos){
        this.listaProductos = listaProductos
        
    }

    productosVenta(){
        for (let i = 0; i < listaProductos.length; i++) {
            console.log((i+1)+") "+listaProductos[i].description())
        } 
        
        this.productoElegido = Number(prompt("Ingrese el número correspondiente al producto que desea comprar"))
    }

    option(){
        return `${this.productoElegido}`
    }
}


class Carrito{
    constructor(list){
        this.list = list
    }

    agregarProducto(){
        this.list.push(listaProductos[ventaProductos.option()-1])
    }

    mostrarCarrito(){
        console.log("SU CARRITO")
        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i].description())
        }

        let totalProductos = 0
        for (const producto of this.list) {
            totalProductos = totalProductos + producto.price 
        }

        console.log("Total productos: $"+ totalProductos)
    }

    comprarCarrito(){
        if(this.list.length === 0){
            alert("Su carrito está vacío")
        }else{
            alert('"Carrito comprado"')
            this.list.splice(0,this.list.length)
        }
        
    }

    eliminarProducto(){
        if(this.list.length === 0){
            alert("Su carrito está vacío")
        }else{
            for (let i = 0; i < this.list.length; i++) {
                console.log((i+1)+") "+this.list[i].description())
            }
            let eliminarProducto = Number(prompt("¿Cual producto desea eliminar?"))
            this.list.splice(eliminarProducto-1,1)
        }
    }
}


listaProductos = [new Producto(1,"Mate camionero",4000),
                    new Producto(2,"Mate torpedo",3500),
                    new Producto(3,"Mate imperial",6000)]


const ventaProductos = new ProductController(listaProductos)

listCarrito = []
const carrito = new Carrito(listCarrito)



function menu(){
    let salir = false 

    for (let i = 0; salir == false; i++) {
        let option = Number(prompt("Ingrese alguna de las siguientes opciones\n\n1) Para agregar productos al carrito\n2) Mostrar el carrito\n3) Comprar carrito\n4) Eliminar un producto del carrito\n5) Salir"))
        
        switch (option) {
            case option = 1:
                ventaProductos.productosVenta()
                if( ventaProductos.option() >= 1 && ventaProductos.option() <= listaProductos.length){
                    carrito.agregarProducto()
                }
                break;
            case option = 2:
                carrito.mostrarCarrito()
                break;
            case option = 3:
                carrito.comprarCarrito()
                break;
            case option = 4:
                carrito.eliminarProducto()
                break;
            case option = 5:
                salir = true
                alert("Saliendo...")
                break;    
            default:
                alert("Ingreso una opción invalida")
                break;
        }
    }
}

menu()






