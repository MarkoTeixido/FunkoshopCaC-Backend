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
                    icon: "success"
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

