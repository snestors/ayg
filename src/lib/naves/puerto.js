import { supabase } from "../supabase";

export const Puertos = async () =>{
    const {data} = await supabase.from('puerto').select( "id, puerto, origen(origen, abrev))")
    return data
}