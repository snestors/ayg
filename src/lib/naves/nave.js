

export const queryNaves =  "id, nombre_nave, fecha_arribo, fecha_atraque, fin_de_operaciones, estatus,  puerto(id, puerto, origen(origen, abrev)), rubros(id, rubro, categoria_rubros(id, categoria_rubro)), agente_naviero(id, agente_naviero, direccion_legal, distrito, departamento), users(nombre), created_at"