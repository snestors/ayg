import { Label, TextInput } from "flowbite-react";

import { useForm } from "react-hook-form";

function FormNavesBody({onSubmit}) {
  const { register } = useForm();

 
   

  return (
    <>
      <form onSubmit={onSubmit}>
        <Label>Nombre de la Nave:</Label>
        <br />
        <TextInput
          type="text"
          {...register("nombre")}
          
        />
        <br />

        <Label>Fecha de Arribo:</Label>
        <br />
        <TextInput
          type="datetime-local"
         
        />
        <br />

        <Label>Fecha de Atraque:</Label>
        <br />
        <TextInput
          type="datetime-local"
         
        />
        <br />

        <Label>Fin de Operaciones:</Label>
        <br />
        <TextInput
          type="datetime-local"
          
        />
        <br />

        <Label>Estatus:</Label>
        <br />
        <TextInput
          type="text"
          
        />
        <br />

        <Label>Puerto:</Label>
        <br />
        <TextInput
          type="text"
          
        />
        <br />

        <Label>Origen:</Label>
        <br />
        <TextInput
          type="text"
         
        />
        <br />

        <Label>Abreviatura del Origen:</Label>
        <br />
        <TextInput
          type="text"
         
        />
        <br />

        <Label>Rubro:</Label>
        <br />
        <TextInput
          type="text"
         
        />
        <br />

        <Label>Categoría del Rubro:</Label>
        <br />
        <TextInput
          type="text"
          
        />
        <br />

        <Label>Agente Naviero:</Label>
        <br />
        <TextInput
          type="text"
         
        />
        <br />

        <Label>Nombre del Usuario:</Label>
        <br />
        <TextInput
          type="text"
         
        />
        <br />

        <button type="submit">Registrar Detalles</button>
      </form>
    </>
  );
}

export default FormNavesBody;
