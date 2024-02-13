import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { FaUserAlt } from "react-icons/fa";
import { formatearFechaHora } from "../formatos/horadatetime";




function UserData({nave}) {
    console.log(nave)

    
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <a><FaUserAlt /></a>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Usuario</div>
          <div className="text-tiny">{nave.users.nombre}</div>
          <div className="text-small font-bold">Creado</div>
          <div className="text-tiny">{formatearFechaHora(nave.created_at)}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserData;