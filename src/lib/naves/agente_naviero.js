import { supabase } from "../supabase"


export const AgenteNaviero = async()=> {
    const {data} = await supabase.from('agente_naviero').select('*')
    return data
}