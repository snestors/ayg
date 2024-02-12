
import { useParams } from "react-router-dom";
import { queryNaves } from "../../../../lib/naves/nave";
import { useEffect, useState } from "react";

import LoadingCard from "../../../../components/ui/loadingCard";
import { supabase } from "../../../../lib/supabase";
import NaveComponent from "./naveComponent";

function DetalleNaveComponent() {
  const { id } = useParams();
  const [nave, setNave] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const getNaves = async () => {
    setIsLoading(true)
    const {data, error} = await supabase.from('naves').select(queryNaves).eq('id', id)
    
    setNave(data[0]);
    setIsLoading(false);
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNaves();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      

      {/* Fila con dos columnas */}
      <div className="flex justify-between">
        <div className="w-1/2 p-4">
         {
          isLoading ? <LoadingCard/> : <NaveComponent nave={nave}/>
         }
        </div>
        <div className="w-1/2 p-4">
          
        <LoadingCard/>
          </div>
      </div>

      {/* Tercera fila de ancho completo */}
      <div className=" p-4">
      <LoadingCard/>
      </div>
    </>
  );
}

export default DetalleNaveComponent;
