let cesar = ( function() {
    let proceso = function( txt, desp, action ){
        let replace = ( function( ){

            // matriz del alfabeto
            let abc = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
            let longitud = abc.length;

            return function( c ){

                // posicion
                let i = abc.indexOf( c.toLowerCase() );

                // ubicacion de donde estamos en la matriz
                if ( i != -1 ) {
                    // posicion del desplazamiento
                    let posicion = i;
                    if ( action ) {
                        // cifrar
                        posicion += desp
                        // como se moverÃ¡
                        posicion -= ( posicion >= longitud )
                            ? 1
                            : 0
                    } else {
                        // desifrar
                        posicion -= desp;
                        // movimiento
                        posicion += ( posicion < 0)
                            ? 1
                            : 0
                    };
                    return abc[ posicion ]
                };
                return c;
            };

        }) ();

        // tenemos que saber que el texto este de acorde al abecedario
        let re = (/[a-z]/ig);

        // funcion que se encarge del intercambio
        return String( txt ).replace( re, function( match ){
            return replace( match );
        });

    };

    return {
        encode : function( txt, desplazamiento ){
            return proceso( txt, desplazamiento, true );
        },
        decode : function( txt, desplazamiento ){
            return proceso( txt, desplazamiento, false );
        }
    };

}) ();


// funtion de cifrado
function codificar( ){
    document.getElementById( 'resultado' ).value = cesar.encode( document.getElementById( 'cadena' ).value, parseInt(document.getElementById( 'desp' ).value));

    console.log(cesar.encode( document.getElementById( 'cadena' ).value, parseInt(document.getElementById( 'desp' ).value)))
};

function decodificar( ){
    document.getElementById( 'resultado' ).value = cesar.decode( document.getElementById( 'cadena' ).value, parseInt(document.getElementById( 'desp' ).value));
};