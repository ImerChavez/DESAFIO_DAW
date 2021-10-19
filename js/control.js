//Mostrar totales principales
var pIngreso = document.getElementById('Tingreso');
var tIngreso = 0;
pIngreso.innerHTML = "+" + tIngreso.toFixed(2)

var pEgreso = document.getElementById('Tgasto');
var tEgreso = 0;
pEgreso.innerHTML = "-" + tIngreso.toFixed(2)

var pTotal = document.getElementById('montoTotal');
var totalMonto = 0;
pTotal.innerHTML = "$" + totalMonto.toFixed(2)

var porcentajetotal = document.getElementById('porcentajetotal');
var portotal = 0;
porcentajetotal.innerHTML = portotal + "%"

//Funcion para seleccionar opcion de ingreso o gasto
function opcion(selected) {
    var SeleccionIngresoGasto = document.getElementById('SeleccionIngresoGasto');
    var selected = SeleccionIngresoGasto.options[SeleccionIngresoGasto.selectedIndex].text;
    return selected;
}


//Varibles para regresar datos
var contenedor_Ingreso=document.getElementById('Tabla_Ingreso');
var contenedor_Egreso=document.getElementById('Tabla_Egreso');
var vIngreso=[];
var vEgreso=[];

//Funcion para agregar los datos
function btnagregar(){
    if (opcion() == "INGRESO") {
        contenedor_Ingreso.innerHTML = "";
    let descripcion=document.getElementById('descripcion').value;
    let monto=document.getElementById('monto').value;
    let suma=(parseFloat(tIngreso) +  parseFloat(monto));
    tIngreso= suma;
    pIngreso.innerHTML= "+"  +  tIngreso.toFixed(2)

    let tabla="<tr> <th>" +  descripcion + "</th> <th>"  + ("+ $ " + monto)  + "</th> </tr>";      
        vIngreso.push(tabla);
        console.log(vIngreso);

        for (let i = 0; i < vIngreso.length; i++) {
            contenedor_Ingreso.innerHTML = vIngreso.join("");
    }

    }
    
    if(opcion()=="EGRESO"){
    contenedor_Egreso.innerHTML="";
    let descripcion= document.getElementById('descripcion').value;
        let monto= document.getElementById('monto').value;
        let suma= (parseFloat(tEgreso) + parseFloat(monto));
        tEgreso=suma;
        pEgreso.innerHTML="-" + tEgreso.toFixed(2)
        
        portotal= (tEgreso *100)/tIngreso;
        porcentajetotal.innerHTML= Math.ceil(portotal) + " % " 
        
        var porcentaje_Egreso= (monto * 100)/ tIngreso;

        let tabla="<tr> <th>" + descripcion + "</th> <th>" + ("- $ " + monto) + "</th> <td class='text-white bg-dark'>" + Math.ceil(porcentaje_Egreso) + " % </td> </tr>";2
        vEgreso.push(tabla);
        
        for(let i=0; i <vEgreso.length; i++){
        contenedor_Egreso.innerHTML= vEgreso.join("");
        };
    }
        pTotal=document.getElementById('montoTotal');
    totalMonto=(parseFloat(tIngreso)-parseFloat(tEgreso));
        pTotal.innerHTML= "$" + totalMonto.toFixed(2)
    }
//funcion validacion
function validacion(){
if (document.getElementById('descripcion').value== ""){
alert('CAMPO OBLIGATORIO');
    return false;
 }
 else if (document.getElementById('monto').value == ""){
 alert ('CAMPO OBLIGATORIO');
        return false;
 }
    btnagregar();
    
}
//funcion para limpiar
function limpiar(){
document.getElementById('descripcion').value="";
document.getElementById('monto').value="";    
}