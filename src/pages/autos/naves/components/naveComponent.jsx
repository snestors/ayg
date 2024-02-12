import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { Button, Label } from "flowbite-react";

import { formatearFechaHora } from "../../../../components/formatos/horadatetime";

export default function NaveComponent({ nave }) {
  

  return (
    <Card className="">
      <CardHeader className="flex gap-1 justify-between">
        <div className="flex gap-2 items-center">
        <Label>Nave de descarga:</Label>
        {nave.nombre_nave}
        <Label>Rubro:</Label>
        {nave.rubros.rubro} - {nave.rubros.categoria_rubros.categoria_rubro}
        </div>
        <div className="flex justify-end">
        <Button.Group>
          <Button>Editar</Button>
          <Button>Borrar</Button>
        </Button.Group>
      </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Label>Fecha Arribo:</Label>
        {formatearFechaHora(nave.fecha_arribo)}
        <Label>Fecha Atraque:</Label>
        {formatearFechaHora(nave.fecha_atraque)}
        <Label>Fecha Fin de Operacion:</Label>
        {formatearFechaHora(nave.fin_de_operaciones)}
        <Label>Estatus:</Label>
        {nave.estatus}
        <Label>Puerto:</Label>
        {!nave.puerto ? "" : nave.puerto.puerto} -{" "}
        {!nave.puerto ? "" : nave.puerto.origen.origen}
      </CardBody>
      <Divider />
      <CardFooter className="flex gap-1">
        <Label>Linea Naviera: </Label>
        {nave.agente_naviero && nave.agente_naviero.agente_naviero}
      </CardFooter>
    </Card>
  );
}
