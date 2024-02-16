import { supabase } from "../supabase"


export const Rubros = async()=>{
    const {data} = await supabase.from('rubros').select('id, rubro, categoria(categoria_rubro)')
    return data
}