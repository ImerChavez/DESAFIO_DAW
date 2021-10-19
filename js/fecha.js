//fecha actual
let meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
let fecha = new Date();

function mostrar_fecha(){
    let Month = fecha.getMonth();
    let Year = fecha.getFullYear();
    document.getElementById("Fecha").innerHTML= `MES DE ${meses[Month]} ${Year}`;

}

mostrar_fecha()




