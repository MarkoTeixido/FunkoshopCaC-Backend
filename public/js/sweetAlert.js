document.addEventListener("click", (event) => {

    if (event.target.closest("form").classList.contains("form-delete")) {
        event.preventDefault();

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
            cancelButtonText: "Borrar",
            confirmButtonText: "Cancelar",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    text: "El producto está a salvo",
                    icon: "error"
                });
            } 
            if (result.dismiss === Swal.DismissReason.cancel) {
                event.target.closest("form").submit();
            }
        });
    }
});
