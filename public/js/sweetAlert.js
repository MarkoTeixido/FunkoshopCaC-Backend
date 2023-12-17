document.addEventListener("click", (event) => {

    if (event.target.closest("form").classList.contains("form-delete")) {
        event.preventDefault()

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success btn-pageAdmin-delete",
                cancelButton: "btn btn-danger btn-pageAdmin-cancelDelete"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "¿Seguro desea eliminar el producto?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, Borralo!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "¡Eliminado!",
                    text: "Su producto ha sido eliminado..",
                    icon: "success",
                    showConfirmButton: false,
                });

                event.target.closest("form").submit()

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    text: "El producto está a salvo",
                    icon: "error"
                });
            }
        });

    }
})

const btnCrear = document.querySelector(".btn-CrearProducto")

btnCrear.addEventListener("click", (event) => {

    event.preventDefault()

    if (procesarNameProduct() && procesarDescripcion() && procesarSKU() && procesarPrecio() && procesarStock() && procesarDescuento() && procesarURLS()) {
        Swal.fire({
            title: "Producto Registrado con exito!",
            text: "Sera redirigido al listado de productos!",
            icon: "success",
            showConfirmButton: false,
        });
        event.target.closest("form").submit()
    }

    function procesarNameProduct() {

        const inputNameProduct = document.getElementById('nameProduct')

        if (inputNameProduct.value != null && inputNameProduct.value != " " && inputNameProduct.value != "") {
            return true
        }
        else {
            inputNameProduct.focus()
            Swal.fire({
                icon: "error",
                title: "Falta completar el nombre del Producto",
            });

            return false;
        }
    }

    function procesarDescripcion() {

        const textDescriptionProduct = document.getElementById('descriptionProduct')

        if (textDescriptionProduct.value.length !== 0) {
            return true
        }
        else {
            textDescriptionProduct.focus()
            Swal.fire({
                icon: "error",
                title: "Falta completar la descripcion del producto",
            });

            return false;
        }
    }

    function procesarSKU() {
        const inputSkuProduct = document.getElementById('sku')

        if (inputSkuProduct.value != null && inputSkuProduct.value != " " && inputSkuProduct.value != "") {
            return true
        }
        else {
            inputSkuProduct.focus()
            Swal.fire({
                icon: "error",
                title: "Falta completar el SKU del Producto",
            });

            return false;
        }
    }

    function procesarPrecio() {
        const inputPrecioProduct = document.getElementById('price')

        if (inputPrecioProduct.value != null && inputPrecioProduct.value > 0) {
            return true
        }
        else {
            inputPrecioProduct.focus()
            Swal.fire({
                icon: "error",
                title: "Error en el Precio del Producto",
            });

            return false;
        }
    }

    function procesarStock() {
        const inputStockProduct = document.getElementById('stock')

        if (inputStockProduct.value != null && inputStockProduct.value > 0) {
            return true
        }
        else {
            inputStockProduct.focus()
            Swal.fire({
                icon: "error",
                title: "Error en el Stock del Producto",
            });

            return false;
        }
    }

    function procesarDescuento() {
        const inputDescuentoProduct = document.getElementById('discount')

        if (inputDescuentoProduct.value != null && inputDescuentoProduct.value >= 0) {
            return true
        }
        else {
            inputDescuentoProduct.focus()
            Swal.fire({
                icon: "error",
                title: "Error en el Descuento del Producto",
            });

            return false;
        }
    }

    function procesarURLS() {
        const urlInput = document.getElementById('image_front').value;
        const urlInputBack = document.getElementById('image_back').value;

        // Verifica si la URL tiene la extensión .webp
        if (urlInput.toLowerCase().endsWith('.webp') && urlInputBack.toLowerCase().endsWith('.webp')) {
            return true
        } else {
            Swal.fire({
                icon: "error",
                title: "Las URLS deben tener la extensión .webp",
            });

            return false; // Evita que el formulario se envíe
        }
    }

})
