var nombre = prompt("Cual es su nombre".toString());
var edad = parseInt(prompt("Ingresa tu edad"));
// bien pensado alex pero casi (if (!nombre){)
    document.write("Ingrese un nombre");
    document.write("<br>");
//}
if (edad >= 18) {
    document.write("Bienvenido " , nombre.concat(" de edad ", edad));
    }else {
        if (edad < 18){
            document.write("Eres menor, señor " , nombre);
        }else{
            document.write("Pon algo perro"); //eso ya lo hace esta comanda
        }
    }