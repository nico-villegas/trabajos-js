let listaProductos = [
    { id: 1, nombre: "Imperial Cincelado", precio: 10000, descripcion: "Mate imperial premium", cantidad: 1, img: "../img/mate-imperial-cincelado.jpg", alt: "imagen imperial cincelado" },
    { id: 2, nombre: "Imperial Liso", precio: 8000, descripcion: "Mate imperial liso de acero inoxidable", cantidad: 1, img: "../img/mate-imperial-liso.jpg", alt: "imagen imperial liso" },
    { id: 3, nombre: "Imperial Cincelado con virola lisa", precio: 9000, descripcion: "Mate imperial cincelado con virola lisa", cantidad: 1, img: "../img/mate-imperial-cincelado-con-virola-lisa.jpg", alt: "imagen imperial cincelado virola lisa" },
    { id: 4, nombre: "Camionero alpaca cincelado", precio: 5000, descripcion: "Mate camionero de alpaca cincelada", cantidad: 1, img: "../img/mate-camionero-alpaca-cincelado.jpg", alt: "imagen camionero alpaca cincelada" },
    { id: 5, nombre: "Camionero acero inoxidable cincelado", precio: 4500, descripcion: "Mate camionero de acero inoxidable con virola cincelada", cantidad: 1, img: "../img/mate-camionero-cincelado.jpg", alt: "imagen camionero virola cincelada" },
    { id: 6, nombre: "Camionero acero inoxidable", precio: 4000, descripcion: "Mate camionero con virola de acero inoxidable", cantidad: 1, img: "../img/mate-camionero-acero.jpg", alt: "imagen camionero acero" },
    { id: 7, nombre: "Torpedo cincelado", precio: 5000, descripcion: "Mate torpedo con virola cincelada", cantidad: 1, img: "../img/mate-torpedo-cincelado.jpg", alt: "imagen torpedo cincelado" },
    { id: 8, nombre: "Torpedo acero inoxidable marrón", precio: 3500, descripcion: "Mate torpedo marrón con virola de acero", cantidad: 1, img: "../img/mate-torpedo-acero-marron.jpg", alt: "imagen torpedo marron" }
]

function subirProductos(){

    const listaProductosJSON = JSON.stringify(listaProductos)

    localStorage.setItem("listaProductos", listaProductosJSON)
}

subirProductos()
