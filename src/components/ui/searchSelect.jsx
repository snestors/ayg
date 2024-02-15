import { ListGroup, Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";
import { useDebounce } from "../../lib/hooks/debounce";
import { supabase } from "../../lib/supabase";

function SearchSelectNaves({ register, initState = "" }) {
  const [search, setSearch] = useState(initState);
  const [drop, setDrop] = useState(false); // Inicializar el menú desplegable abierto por defecto
  const [resultDrop, setResultDrop] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFromSuggestions, setSelectedFromSuggestions] = useState(false); // Nuevo estado
  const [SelectedValue, setSelectedValue] = useState('')
    console.log(SelectedValue)
  const debounceValue = useDebounce(search);

  const onChanges = async (search) => {
    setDrop(true);    
    setResultDrop([]);
    setIsLoading(true)

    try {
      // Simular una solicitud asíncrona
      const {data} = await supabase.from('naves').select('*').limit(5).ilike('nombre_nave',  `%${search}%`)
      
      setResultDrop(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching results:", error);
      // Manejar el error adecuadamente, posiblemente mostrando un mensaje al usuario
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debounceValue && !selectedFromSuggestions) {
      // Agregar condición para evitar búsquedas cuando se selecciona una sugerencia
      onChanges(debounceValue);
    } else {
      // Limpiar la lista de resultados si la búsqueda está vacía
      setResultDrop([]);
    }
  }, [debounceValue, selectedFromSuggestions]); // Actualizar el efecto cuando selectedFromSuggestions cambia

  return (
    <div className="flex flex-col gap-1">
        <input value={SelectedValue} />
      <TextInput
        
        addon={
          search && (
            <a
              onClick={() => {
                setSearch("");
                setSelectedFromSuggestions(false);
              }}
            >
              <MdClear />
            </a>
          )
        }
        value={search}
        {...register("idNave", {onChanges: (e)=>{
            console.log(e.target.value)
            setSearch(e.target.value)
        }})}
       
       
      />
      {drop && (
        <ListGroup>
          {isLoading && (
            <div className="flex justify-center">
              <ListGroup.Item>
                <Spinner />
              </ListGroup.Item>
            </div>
          )}
          {
            (resultDrop.length == 0 && !isLoading) && <ListGroup.Item>No Hay Resultados</ListGroup.Item>
          }
          {
            resultDrop.length != 0 && resultDrop.map((result) => (
                <ListGroup.Item
                  key={result.id}
                  onClick={() => {
                    setSelectedValue(result.id)
                    setSearch(result.nombre_nave);
                    setResultDrop([]);
                    setDrop(false);
                    setSelectedFromSuggestions(true); // Establecer el estado como verdadero cuando se selecciona una sugerencia
                  }}
                >
                  {result.nombre_nave}
                </ListGroup.Item>
              ))
          }
        </ListGroup>
      )}
    </div>
  );
}

export default SearchSelectNaves;
