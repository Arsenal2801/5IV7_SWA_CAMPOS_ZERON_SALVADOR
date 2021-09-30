
const abc = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// llave
let key = ""

$(document).ready(function () {
    $('#ci').click(function () {
        //funcion para cifrar Y=(X+Z)mod27
        key = document.getElementById('llave').value
        key = key.replace(/ /g,'')

        //msg
        let mess = document.getElementById('mess').value
        mess = mess.replace(/ /g,'')

        let newmsg = ""
        let keyComplete = ""


        //Algoritmo

        if(revision(mess,key)){
            for (let i = 0; i < mess.length; i++) {
                keyComplete+= key.charAt((i%Number(key.length)))
            }
            alert(keyComplete)
            for (let i = 0; i < mess.length; i++) {
                let charr = mess.charAt(i)
                let posm = getPosition(charr)

                charr = keyComplete.charAt(i)
                let posk = getPosition(charr)

                let newVal = change(posm, posk)

                newmsg += abc[newVal]
            }
            document.getElementById('rs').value = newmsg
        }else{

        }

    })
    $('#de').click(function () {
        //funcion para cifrar Y=(X+Z)mod27
        key = document.getElementById('llave').value
        key = key.replace(/ /g,'')

        //msg
        let mess = document.getElementById('mess').value
        mess = mess.replace(/ /g,'')

        let newmsg = ""
        let keyComplete = ""


        //Algoritmo

        if(revision(mess,key)){
            for (let i = 0; i < mess.length; i++) {
                keyComplete+= key.charAt((i%Number(key.length)))
            }
            alert(keyComplete)
            for (let i = 0; i < mess.length; i++) {
                let charr = mess.charAt(i)
                let posm = getPosition(charr)

                charr = keyComplete.charAt(i)
                let posk = getPosition(charr)

                let newVal = rechange(posm, posk)

                newmsg += abc[newVal]
            }
            document.getElementById('rs').value = newmsg
        }else{

        }

    })
})

//cambio
function change(posm, posk) {
    //aplicamos y=(x+z)mod27
    let y = (posk+posm)%27
    return y
}

//recambio
function rechange(posm, posk) {
    let val = 0
    if((posm-posk)>=0){
        val = (posm+posk)%27
    }else{
        val = (posm-posk+27)%27
    }
    return val
}

function getPosition(letra) {
    let position = abc.indexOf(letra)
    return position
}

function revision(mess,desp) {
    const re =  /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/
    var acc = true
    if(!re.test(mess)){
        sd()
        acc=false
    }if (!re.test(desp)) {
        sdd()
        acc = false
    }if (desp.length > mess.length) {
        sz()
    }
}

function sd(){
    //alert para decir que el texto no ha sido aceptado
    Swal.fire({
        title:"Error",
        text:"El texto ingreso no ha sido aceptado, ingrese solo minuscilas y evite numeros y simbolos",
        icon: 'error'
    });

    alert("El texto ingreso no ha sido aceptado, ingrese solo minuscilas y evite numeros y simbolos");
}


function sdd(){
    //alert para decir que el texto no ha sido aceptado
    Swal.fire({
        title:"Error",
        text:"La clave ingresa es incorrecta, no cumple con las normas de solo minusculas y no usar numeros y/o simbolos",
        icon: 'error'
    });

    alert("La clave ingresa es incorrecta, no cumple con las normas de solo minusculas y no usar numeros y/o simbolos");
}

function sz(){
    //alert para decir que el texto no ha sido aceptado
    Swal.fire({
        title:"Error",
        text:"La clave no puede ser mayor que el mensaje",
        icon: 'error'
    });

    alert("La clave no puede ser mayor que el mensaje");
}
