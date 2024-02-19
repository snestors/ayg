import { ListGroup, Spinner, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";
import { useDebounce } from "../../lib/hooks/debounce";
import { supabase } from "../../lib/supabase";

function SearchSelectNaves({ register, setValue, initState = "", required = false}) {
  const [search, setSearch] = useState(initState);
  const [drop, setDrop] = useState(false);
  const [resultDrop, setResultDrop] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFromSuggestions, setSelectedFromSuggestions] = useState(false);

  const debounceValue = useDebounce(search);

  const onChanges = async (search) => {
    setDrop(true);
    setResultDrop([]);
    setIsLoading(true);

    try {
      const { data } = await supabase
        .from("naves")
        .select("nombre_nave")
        .limit(5)
        .ilike("nombre_nave", `%${search}%`);       

      setResultDrop([...new Set(data.map((e)=>e.nombre_nave))]);
    } catch (error) {
      console.error("Error fetching results:", error);
      alert("Ups, un error ocurrió al buscar naves. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const setSuggestion = (result) => {
    setSearch(result);
    setResultDrop([]);
    setDrop(false);
    setSelectedFromSuggestions(true);
    setValue("nombre_nave", result, {});
  };

  useEffect(() => {
    if(initState){
      setSuggestion(initState.nombre_nave)
      
    }

    if (debounceValue && !selectedFromSuggestions) {
      onChanges(debounceValue);
    } else {
      setResultDrop([]);
    }
  }, [debounceValue, selectedFromSuggestions]);

  return (
    <div className="flex flex-col gap-1">
      <TextInput
      {...register("nombre_nave", {required:required})}
        value={search}
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
        onChange={(e) => setSearch(e.target.value)}
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
          {resultDrop.length === 0 && !isLoading && (
            <ListGroup.Item onClick={()=>setSuggestion(search)}>{`ADD ${search}`}</ListGroup.Item>
          )}
          {resultDrop.length > 0 &&
            resultDrop.map((result) => (
              <ListGroup.Item
                key={result}
                onClick={() => {
                  setSuggestion(result)// Actualizar el valor utilizando react-hook-form
                }}
              >
                {result}
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
    </div>
  );
}

export default SearchSelectNaves;
