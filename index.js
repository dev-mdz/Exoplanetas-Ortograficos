
function login() {

    let user=document.getElementById("usuario").value
    let pass=document.getElementById("contraseña").value
        
        if (user=="Marcelo" && pass=="123456") {
        window.location="https://view.genial.ly/6540f599e4fd8400121fcd84/horizontal-infographic-timeline-copia-recorrido-planeta-infernal-copia"
    }
    else {
        alert("Datos mal ingresados")
    }
}
