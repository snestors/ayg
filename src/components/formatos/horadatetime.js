// En un archivo como MiComponente.js

function formatearFechaHora(datetime) {

    if(datetime){
        const fechaYHora = new Date(datetime);
 
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
  
    const formatoFechaHora = new Intl.DateTimeFormat('es-ES', options).format(
        fechaYHora
    );
  
    return formatoFechaHora;
    }else {
       return null
    }


   
  }
  
  // Exportar la función para que pueda ser utilizada en otros archivos si es necesario
  export { formatearFechaHora };