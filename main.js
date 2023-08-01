


const Celular = function(nombre, precio, stock){
    this.nombre=nombre,
    this.precio=precio,
    this.stock=stock
}


let celular1 = new Celular ("Samsung", 360000, 10)
let celular2 = new Celular ("Motorola", 40000, 20)
let celular3 = new Celular ("Iphone", 30000, 10)
let celular4 = new Celular ("Xioami", 20000, 10)
let celular5 = new Celular ("Huawei", 20000, 20)

let lista = [celular1, celular2, celular3, celular4, celular5]

function filtrarCelular(){
    let palabraclave = prompt("Ingrese el nombre del producto")
    let resultado = lista.filter(    (celular)=> celular.nombre.includes(palabraclave)     )

if (resultado.length > 0){
    console.table(resultado)
}else{
    alert("No hay productos que coincidan con: " + palabraclave)
}
}


