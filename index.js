function valida_envia(){
    //valido el nombre
    if (document.formulario.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
          // document.fvalida.nombre.focus()
           return 0;
    }

 
        if (document.formulario.telefono.value.length==0) {
            alert("Tiene que escribir su telefono")
           return 0;
     }

          //valido el email
             if (document.formulario.email.value.length==0) {
               alert("Tiene que escribir su mail")
              return 0;
        }

    //valido el interés
    if (document.formulario.interes.selectedIndex==0){
           alert("Debe seleccionar un motivo de su contacto.")
           document.fvalida.interes.focus()
           return 0;
    }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();
}

