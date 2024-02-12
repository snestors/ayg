import {  Card, TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

import { useState } from "react";
import ListNavesComponents from "./components/listNaves";
import { useDebounce } from "../../../lib/hooks/debounce";
import { Select, SelectItem } from "@nextui-org/react";
import FormNaves from "./components/formNaves";

function Naves() {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);
  const [estatus, setEstatus] = useState(["TODOS"]);

  const onSelected = (e) => {
    const selectedValues = e.target.value.split(",");

    if (e.target.value === "") {
      setEstatus(["TODOS"]);
    } else {
      if (selectedValues.includes("TODOS")) {
        setEstatus(selectedValues.filter((value) => value !== "TODOS"));
      } else {
        setEstatus(selectedValues.filter((value) => value !== "TODOS"));
      }
    }
  };

  return (
    <>
      <Card className="flex flex-col ">
        {/* Barra superior */}
        <div className="flex justify-between">
          {/* Campo de búsqueda */}
          <div className="flex items-center space-x-2 w-full">
            <TextInput
              type="text"
              placeholder="Buscar"
              icon={IoSearch}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="w-44">
              <Select
                aria-label="Estatus Naves"
                selectionMode="multiple"
                size="xs"
                selectedKeys={estatus}
                onChange={onSelected}
                placeholder="Selecciona un Estatus"
              >
                <SelectItem key={"NUEVO"} value={"NUEVO"}>
                  NUEVO
                </SelectItem>
                <SelectItem key={"CONFIRMADO"} value={"CONFIRMADO"}>
                  CONFIRMADO
                </SelectItem>
                <SelectItem key={"OPERACION"} value={"OPERACION"}>
                  OPERACION
                </SelectItem>
                <SelectItem key={"FINALIZADO"} value={"FINALIZADO"}>
                  FINALIZADO
                </SelectItem>
                <SelectItem key={"TODOS"}>TODOS</SelectItem>
              </Select>
            </div>
          </div>
          {/* Botón de agregar */}
          <FormNaves/>
        </div>

        {/* Tabla */}
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="overflow-hidden  border-b sm:rounded-lg w-full">
                <ListNavesComponents
                  search={debounceSearch}
                  estatus={estatus}
                ></ListNavesComponents>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Naves;
