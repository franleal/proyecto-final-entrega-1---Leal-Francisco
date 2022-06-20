let catalogo = ["1-placas de video", "2-monitores","3-pcesadores"];
let salir = "no"

class PlacasDeVideo{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.iva = function(){
            return "Precio con iva: " + this.precio * n;
        }
    }
    
  
}

class Monitores{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.iva = function(){
            return "Precio con iva: " + this.precio * n;
        }
    }
}

class Procesadoresclase{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.iva = function(){
            return "Precio con iva: " + this.precio * n;
        }
    }
}




let n = 1.21;
let catalogoSiNo = prompt("¿Le gustaria ver nuestros productos? (si/no)");

while (salir != "si"){
   

    if (catalogoSiNo == "si") {
        for(let i = 0; i < catalogo.length; i++){
            alert (catalogo[i]);
        }
    }
    
    let elegirProducto = prompt("seleccione el producto que quiera consultar precios (urilice los numeros que contiene cada producto 1/3)")
    //--------------------PLACAS DE VIDEO---------------------------------------------------------------------------------------------------------------------------------------------
    while (elegirProducto == 1){
        let placas = ["1-Nvidia RTX 2060", "2-Nvidia RTX 2060 Super","3-Nvidia RTX 3060"];
        for(let i = 0; i < placas.length; i++){
            alert(placas[i]);
        }
            
        let elegirPlaca = prompt("Seleccione la placa de vide de la cual quiere consultar su precio (urilice los numeros que contiene cada producto 1/3)")
    
        if (elegirPlaca == 1){
            const placadevideo1 = new PlacasDeVideo("Nvidia RTX 2060", 60000);
            alert("-Nombre: " + placadevideo1.nombre + " -Precio:  " + placadevideo1.precio);
            alert(placadevideo1.iva());
            
        }
    
        if (elegirPlaca == 2){
            const placadevideo2 = new PlacasDeVideo("Nvidia RTX 2060 Super", 75000);
            alert("-Nombre: " + placadevideo2.nombre + " -Precio:  " + placadevideo2.precio);
            alert(placadevideo2.iva());
        }
    
        if (elegirPlaca == 3){
            const placadevideo3 = new PlacasDeVideo("Nvidia RTX 3060", 85000);
            alert("-Nombre: " + placadevideo3.nombre + " -Precio:  " + placadevideo3.precio);
            alert(placadevideo3.iva());
        }
    
        elegirProducto = prompt("Si desea continuar viendo placas de video precione 1 sino 0")
        salir = prompt ("¿desea salir? si/no");
        if (salir == "si"){
            break
        }
        catalogoSiNo = prompt("¿Le gustaria ver un nuevo producto? (si/no)");
    }


    //--------------------MONITORES---------------------------------------------------------------------------------------------------------------------------------------------
        
    while (elegirProducto == 2){
        let monitores = ["1-Gigabyte 24 pulgadas", "2-MSI 24 pulgadas","3-Samsung 49 pulgadas curvo"];
        for(let i = 0; i < monitores.length; i++){
            alert(monitores[i]);
        }
            
        let elegirMonitor = prompt("Seleccione el monitor del cual quiere consultar su precio (urilice los numeros que contiene cada producto 1/3)")
    
        if (elegirMonitor == 1){
            const monitor1 = new PlacasDeVideo("Gigabyte 24 pulgadas", 60000);
            alert("-Nombre: " + monitor1.nombre + " -Precio:  " + monitor1.precio);
            alert(monitor1.iva());
        }
    
        if (elegirMonitor == 2){
            const monitor2 = new PlacasDeVideo("MSI 24 pulgadas", 90000);
            alert("-Nombre: " + monitor2.nombre + " -Precio:  " + monitor2.precio);
            alert(monitor2.iva());
        }
    
        if (elegirMonitor == 3){
            const monitor3 = new PlacasDeVideo("Samsung 49 pulgadas curvo", 300000);
            alert("-Nombre: " + monitor3.nombre + " -Precio:  " + monitor3.precio);
            alert(monitor3.iva());
        }

        elegirProducto = prompt("Si desea continuar viendo monitores precione 1 sino 0")
        salir = prompt ("¿desea salir? si/no");
        if (salir == "si"){
            break
        }
        catalogoSiNo = prompt("¿Le gustaria ver un nuevo producto? (si/no)");
    }

    //--------------------PROCESADORES---------------------------------------------------------------------------------------------------------------------------------------------

    while (elegirProducto == 3){
        let procesadores = ["1-Ryzen 7 3700x ", "2-Intel I7 8700","3-Ryzen 5 1600"];
        for(let i = 0; i <procesadores.length; i++){
            alert(procesadores[i]);
        }
            
        let elegirProcesador = prompt("Seleccione el procesador del cual quiere consultar su precio (urilice los numeros que contiene cada producto 1/3)")

        if (elegirProcesador == 1){
            const procesador1 = new Procesadoresclase("Ryzen 7 3700x", 150000);
            alert("-Nombre: " + procesador1.nombre + " -Precio:  " + procesador1.precio);
            alert(procesador1.iva());
        }

        if (elegirProcesador == 2){
            const procesador2 = new Procesadoresclase("Intel I7 8700", 160000);
            alert("-Nombre: " + procesador2.nombre + " -Precio:  " + procesador2.precio);
            alert(procesador2.iva());
        }

        if (elegirProcesador == 3){
            const procesador3 = new Procesadoresclase("Ryzen 5 1600", 30000);
            alert("-Nombre: " + procesador3.nombre + " -Precio:  " + procesador3.precio);
            alert(procesador3.iva());
        }

        elegirProducto = prompt("Si desea continuar viendo procesadores precione 1 sino 0")
        salir = prompt ("¿desea salir? si/no");
        if (salir == "si"){
            break
        }
        catalogoSiNo = prompt("¿Le gustaria ver un nuevo producto? (si/no)");
    }

}






