import { useEffect, useState } from "react"
import { supabase } from "../../../../lib/supabase"
import { Table } from "flowbite-react"
import { formatearFechaHora } from "../../../../components/formatos/horadatetime"

function ListNavesComponents(){

    const [naves, setNaves] = useState(null)
    const getNaves = async () =>{
        
       

        const result = await supabase.from('naves').select('id, nombre_nave, fecha_arribo, fecha_atraque, fin_de_operaciones, puerto(puerto, origen(origen, abrev)), rubros(rubro, categoria_rubros(categoria_rubro)) ', {count: "exact"}).order('fecha_atraque', { ascending: false })
        setNaves(result.data)
        console.log(result.data)
        
    }


    useEffect(()=>{
        getNaves()
    }, [])

    return (
        <Table hoverable={true} striped={true}>
            <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>Buque de descarga</Table.HeadCell>
                <Table.HeadCell>Fecha Arribo</Table.HeadCell>
                <Table.HeadCell>Fecha Atraque</Table.HeadCell>
                <Table.HeadCell>Fecha Fin de Operacion</Table.HeadCell>
                <Table.HeadCell>Estatus</Table.HeadCell>
                <Table.HeadCell>Puerto</Table.HeadCell>
                <Table.HeadCell>Rubro</Table.HeadCell>
                
                
            </Table.Head>
            <Table.Body >
                {
                    naves && naves.map((nave)=>(
                        <Table.Row key={nave.id} >
                    <Table.Cell>{nave.id}</Table.Cell >                    
                    <Table.Cell>{nave.nombre_nave}</Table.Cell>
                    <Table.Cell>{formatearFechaHora(nave.fecha_arribo)}</Table.Cell>
                    <Table.Cell>{formatearFechaHora(nave.fecha_atraque)}</Table.Cell>
                    <Table.Cell>{formatearFechaHora(nave.fin_de_operaciones)}</Table.Cell>
                    <Table.Cell>{nave.estatus}</Table.Cell>
                    <Table.Cell>{!nave.puerto ? "" : nave.puerto.puerto} - {!nave.puerto ? "" : nave.puerto.origen.origen}</Table.Cell>
                    <Table.Cell>{nave.rubros.rubro} - {nave.rubros.categoria_rubros.categoria_rubro}</Table.Cell>
                    
                    
                </Table.Row>
                    ))
                }
               
                    
            </Table.Body>
        </Table>
    )
}

export default ListNavesComponents


