

if(login()){
    menu()
}

function login() {
    let user_correct = "admin"
    let password_correct = "1234"
    let pass = false
    
    for (let i = 0; pass == false; i++) {
        let user = prompt("Ingrese un usuario")
        let password = prompt("Ingrese una contraseña")
        if ((user_correct == user)&&(password_correct == password)) {
            alert("Ingreando...")
            pass = true
            return true
        } else {
            alert("Usuario o contraseña son incorrectos\nIntentelo nuevamente")
        }
    }
}
function menu() {
    let salir = false
    for (let index = 0; salir == false; index++) {
        let option = Number(prompt("Ingrese alguna de las siguientes opciones:\n1. Ver si es par\n2. Ver si es primo\n3. Salir"))
        switch (option) {
            case option = 1:
                esPar()
                break;
            case option = 2:
                esPrimo()
                break
            case option = 3:
                salir = true
                alert("saliendo...")
            default:
                alert("Nùmero ingresado es incorrecto")
                break;
    }
    }
    
}

function esPar() { 
    let num = Number(prompt("Ingrese un nùmero")) 

    if (num % 2 == 0){
        alert("El nùmero: "+num+" es par")
    }else{
        alert("El nùmero: "+num+" es impar")
    }
}

function esPrimo() {
    let num = Number(prompt("Ingrese un nùmero")) 
    let count = 0
    for (let i = 0; i <= num; i++) {
        if(num % i == 0){
            count++
        }
    }

    if (count == 2){
        alert("El numero: "+num+" es primo")
    }else{
        alert("El numero: "+num+" no es primo")
    }
}