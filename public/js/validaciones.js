const inputs = document.querySelectorAll("input");

const textAreas = document.querySelectorAll("textarea")

textAreas.forEach( textarea =>{
    textarea.addEventListener("blur", (textarea) =>{
        valida(textarea.target);
    });
});

inputs.forEach( input =>{
    input.addEventListener("blur", (input) =>{
        valida(input.target);
    });
});

function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeError = [
    "valueMissing",
    "customError",
]

const mensajesDeError = {
    nombre:{
        valueMissing:"El campo nombre no puede estar vacio"
    },
    descripcion:{
        valueMissing:"El campo descripcion no puede estar vacio"
    },
    sku:{
        valueMissing:"El campo sku no puede estar vacio",
    },
    precio:{
        customError:"El precio no puede ser 0 o menos o estar vacio"
    },
    stock:{
        customError:"El stock no puede ser 0 o menos o estar vacio"
    },
    descuento:{
        valueMissing:"El campo descuento no puede estar vacio",
        customError:"El descuento no puede ser menos de 0"
    },
    imagenFront:{
        valueMissing:"El campo imagen Principal no puede estar vacio",
        customError:"El campo esta vacio o la URL no tiene formato .webp"
    },
    imagenBack:{
        valueMissing:"El campo imagen Secundaria no puede estar vacio",
        customError:"El campo esta vacio o la URL no tiene formato .webp"
    }
}

const validadores = {
    precio: (input) => validarPrecio(input),
    stock : (input) => validarStock(input),
    descuento : (input) => validarDescuento(input),
    imagenFront : (input) => validarImagenFront(input),
    imagenBack : (input) => validarImagenBack(input),

}


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeError.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    
    return mensaje
}

function validarPrecio(input){
    const precio = input.value
    let mensaje = ""
    if(precio <= 0){
        mensaje = "El precio no puede ser 0 o menos o estar vacio";
    }
    input.setCustomValidity(mensaje)
}

function validarStock(input){
    const stock = input.value
    let mensaje = ""
    if(stock <= 0){
        mensaje = "El stock no puede ser 0 o menos o estar vacio";
    }
    input.setCustomValidity(mensaje)
}

function validarDescuento(input){
    const descuento = input.value
    let mensaje = ""
    if(descuento < 0){
        mensaje = "El descuento no puede ser menos de 0"
    }
    input.setCustomValidity(mensaje)
}

function validarImagenFront(input){
    const urlImagenFront = input.value
    let mensaje = ""
    if(!urlImagenFront.endsWith('.webp')){
        mensaje = "El campo esta vacio o la URL no tiene formato .webp"
    }
    input.setCustomValidity(mensaje)
}

function validarImagenBack(input){
    const urlImagenBack = input.value
    let mensaje = ""
    if(!urlImagenBack.endsWith('.webp')){
        mensaje = "El campo esta vacio o la URL no tiene formato .webp"
    }
    input.setCustomValidity(mensaje)
}