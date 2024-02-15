import { Label, TextInput } from "flowbite-react";


import { useForm } from "react-hook-form";
import SearchSelect from "../../../../components/ui/searchSelect";

function FormNavesBody() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();
  
  

  console.log(errors);
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });

  

  return (
    <>
      <form id="form-naves" onSubmit={onSubmit}>
        <Label>Nombre de la Nave:</Label>
        <SearchSelect register={ {...register("nombreNave")}}/>
          


        <br />
        <TextInput
          color={errors.nombre && "failure"}
          type="text"
          {...register("nombre", {

            required: { value: true, message: "El nombre es requerido" },
          })}
          helperText={errors.nombre && <span>{errors.nombre.message}</span>}
        />
        <br />

        <Label>Fecha de Arribo:</Label>
        <br />
        <TextInput type="datetime-local" {...register("fechaArribo")} />
        <br />

        <Label>Fecha de Atraque:</Label>
        <br />
        <TextInput
          type="datetime-local"
          {...register("fechaAtraque", {
            required: true,
          })}
        />
        <br />

        <Label>Fin de Operaciones:</Label>
        <br />
        <TextInput
          type="datetime-local"
          {...register("fechaFinDeOperaciones")}
        />
        <br />

        <Label>Estatus:</Label>
        <br />
        <TextInput type="text" {...register("Estatus")} />
        <br />

        <Label>Puerto:</Label>
        <br />
        <TextInput type="text" {...register("Puerto")} />
        <br />

        <Label>Origen:</Label>
        <br />
        <TextInput type="text" {...register("Origen")} />
        <br />

        <Label>Rubro:</Label>
        <br />
        <TextInput type="text" {...register("Rubro")} />
        <br />

        <Label>Agente Naviero:</Label>
        <br />
        <TextInput type="text" {...register("AgenteNaviero")} />
        <br />

        <button type="submit">Registrar Detalles</button>
      </form>
    </>
  );
}

export default FormNavesBody;
