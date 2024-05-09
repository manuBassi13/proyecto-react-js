import { useState } from "react";

export const usePaginate = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1)
    
    const totalPages = Math.ceil(data.length / itemsPerPage) //1.5 a 2
    const paginate = (numPage) => setCurrentPage(numPage); //paginate permite cambiar de página

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,    //posición inicio
        currentPage * itemsPerPage          //posicion final
    )

    const nextPage = () => {
        if (currentPage < totalPages) {
            paginate(currentPage + 1)
        } else{
            console.log("No hay más páginas")
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1)
        } else {
            console.log("Estás en la página 1")
        }
    }

    const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1)
    return {
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        paginate,
        totalPagesArray,
        currentData,
    }
}