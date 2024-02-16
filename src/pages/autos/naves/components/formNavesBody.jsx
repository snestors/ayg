import { Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import SearchSelectNaves from "../../../../components/ui/searchSelect";
import { Puertos } from "../../../../lib/naves/puerto";
import { useEffect, useState } from "react";
import { Rubros } from "../../../../lib/naves/rubros";
import { AgenteNaviero } from "../../../../lib/naves/agente_naviero";
import { Estatus } from "../../../../lib/naves/estatus";
import { supabase } from "../../../../lib/supabase";



function FormNavesBody({setIsOpen, setIsLoading}) {

  const [puertos, setPuertos] = useState([])
  const [rubros, setRubros] = useState([])
  const [agenteNaviero, setAgenteNaviero] = useState([])
  
  
  
 

  const agregarNave = async (data) => {
    setIsLoading(true)
    const dataToInsert = [
      {
        fecha_arribo: data.fechaArribo ? new Date(data.fechaArribo) : null,
        fecha_atraque: data.fechaAtraque ? new Date(data.fechaAtraque) : null,
        fin_de_operaciones: data.fechaFinDeOperaciones ? new Date(data.fechaFinDeOperaciones) : null,
        id_agente_naviero: data.AgenteNaviero,
        id_puerto: data.Puerto,
        id_rubro: data.Rubro,
        estatus: data.Estatus,
        nombre_nave: data.nombre_nave,
      }
    ];

   const result = await supabase.from('naves').insert(dataToInsert).select('*')
   console.log(result)
   setIsLoading(false) 
   setIsOpen(false)
    window.location.reload()
    return dataToInsert
  }

  useEffect(()=>{
    const getOptions = async()=>{
      const resultPuerto = await Puertos()
      const resultRubros = await Rubros()
      const resultagenteNaviero = await AgenteNaviero()
      
      setPuertos(resultPuerto)
      setRubros(resultRubros)
      setAgenteNaviero(resultagenteNaviero)
    }
    getOptions()
  }, [])

  const {
    setValue,
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  //console.log(errors)

  

  const onSubmit = handleSubmit( async (data) => {
    
    await agregarNave(data);
  });

  return (
    <>
      <form id="form-naves" onSubmit={onSubmit}>
        <Label>Nombre de la Nave:</Label>
        <SearchSelectNaves setValue={setValue} register={register} required={true} />

        <br />

        <Label>Fecha de Arribo:</Label>
        <br />
        <TextInput type="datetime-local" {...register("fechaArribo", )} />
        <br />

        <Label>Fecha de Atraque:</Label>
        <br />
        <TextInput type="datetime-local" {...register("fechaAtraque", {required:true})} />
        <br />

        <Label>Fin de Operaciones:</Label>
        <br />
        <TextInput
          type="datetime-local"
          {...register("fechaFinDeOperaciones")}
        />
        <br />

        <Label>Estatus:</Label>
        <Select {...register("Estatus", {required:true})}>
          {
            Estatus.map((e)=><option key={e}>{e}</option>)
          }
        </Select>
        
        <br />

        <Label>Puerto:</Label>
        <br />
        <Select {...register("Puerto", {required:true})} >
        <option value="">Seleccione un Estatus</option>
          {
           puertos.map((e)=><option value={e.id} key={e.id}>{e.puerto} - {e.origen.abrev}</option>)
          }
          </Select>
        <br />       

        <Label>Rubro:</Label>
        <br />
        <Select {...register("Rubro", {required:true})} >
        <option value="">Seleccione un rubro</option>
          {
            rubros.map((e)=><option value={e.id} key={e.id}>{e.rubro} - {e.categoria.categoria_rubro}</option>)
          }

        </Select>
        <br />

        <Label>Agente Naviero:</Label>
        <br />
        <Select {...register("AgenteNaviero")} >
        <option value="">Seleccione un Agente</option>
          {
            agenteNaviero.map((e)=><option value={e.id} key={e.id}>{e.agente_naviero}</option>)
          }

        </Select>
        <br />
      </form>
    </>
  );
}

export default FormNavesBody;
