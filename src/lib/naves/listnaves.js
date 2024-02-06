import { supabase } from "../supabase";

export const getNaves = async ({params}) => {

    console.log(params)
  const result = await supabase
    .from("naves")
    .select(
      "id, nombre_nave, fecha_arribo, fecha_atraque, fin_de_operaciones, puerto(puerto, origen(origen, abrev)), rubros(rubro, categoria_rubros(categoria_rubro)) ",
      { count: "exact" }
    )
    .order("fecha_atraque", { ascending: false });
  return result;
};
