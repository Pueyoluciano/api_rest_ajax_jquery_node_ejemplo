$(function(){
    function buscar_productos() {
        console.log("BUSCANDO USUARIOS");

        $.ajax({
            // url: 'http://localhost:3000/users',
            url: 'https://my-json-server.typicode.com/pepitogithub/api_rest_ajax_jquery_node_ejemplo/users',
            type: 'GET',
            dataType: 'json',

            success: function(data){ // Funcion de callback
                console.log("RESPUESTA OK");
                console.log(data);
            },

            error: function(request, error) {
                console.log("Ocurrio un error: " + error);
            }
        });
    }

    $("#Boton1").on('click', function() {
        buscar_productos();
    });
})