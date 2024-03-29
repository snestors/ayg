import { Divider } from "@nextui-org/react";
import {  Card, Label, Tooltip } from "flowbite-react";

import { formatearFechaHora } from "../../../../components/formatos/horadatetime";

import DeleteButton from "../../../../components/ui/deleteButton";
import UserData from "../../../../components/ui/userData";
import TooltipAgente from "../../../../components/ui/tootipAgenteNaviero";
import FormNaves from "./formNaves";



export default function NaveComponent({ nave }) {
  const styleCardBody = "flex gap-1 items-center";

  return (
    <Card  >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Label>Nave de descarga:</Label>
          {nave.nombre_nave}
          <Label>Rubro:</Label>
          {nave.rubros.rubro} - {nave.rubros.categoria_rubros.categoria_rubro}
        </div>
        <div className="flex justify-end gap-1">      

          <FormNaves initState={nave}>
            Editar
          </FormNaves>
          <DeleteButton
            id={nave.id}
            from={"naves"}
            texto={`Estas seguro que deseas borrar la nave: ${nave.nombre_nave}`}
          />
        </div>
      </div>
      <Divider />
      <div>
        <div className={styleCardBody}>
          <Label>Fecha Arribo:</Label>
          {formatearFechaHora(nave.fecha_arribo)}
        </div>

        <div className={styleCardBody}>
          <Label>Fecha Atraque:</Label>
          {formatearFechaHora(nave.fecha_atraque)}
        </div>
        <div className={styleCardBody}>
          <Label>Fecha Fin de Operacion:</Label>
          {formatearFechaHora(nave.fin_de_operaciones)}
        </div>
        <div className={styleCardBody}>
          <Label>Estatus:</Label>
          {nave.estatus}
        </div>
        <div className={styleCardBody}>
          <Label>Puerto:</Label>
          {!nave.puerto ? "" : nave.puerto.puerto} -{" "}
          {!nave.puerto ? "" : nave.puerto.origen.origen}
        </div>
      </div>
      <Divider />
      <div className={`${styleCardBody} items-center justify-between`}>
        <div>
          <Label>Linea Naviera: </Label>
          <Tooltip content={<TooltipAgente agente_naviero={nave.agente_naviero}/>}>

          {nave.agente_naviero && nave.agente_naviero.agente_naviero}
          </Tooltip>
        </div>
        {nave.users && <UserData nave={nave} />}
      </div>
    </Card>
  );
}
