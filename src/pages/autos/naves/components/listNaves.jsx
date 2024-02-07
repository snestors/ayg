

import { formatearFechaHora } from "../../../../components/formatos/horadatetime"

import {Spinner, Pagination} from "@nextui-org/react";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { Table } from "flowbite-react";


function ListNavesComponents(){
    
    
    const [naves, setNaves] = useState(null)
    const [page, setPage] = useState(1); 
    const [totalPage, setTotalPage] = useState(0)   
    const [isLoading, setIsLoading] = useState(true);
    
    const ITEM_PER_PAGE = 10
    
    const ItemsPerPage = () => {
        let from = (page - 1) * ITEM_PER_PAGE;
        let to = from + ITEM_PER_PAGE;
        if(page>1){
            from +=1
        }
        console.log(from, to)
        return {from, to}
    }

    const gettotalPages = async () =>{
        const tatolPages = await supabase.from('naves').select("*",{count: 'exact'})

        setTotalPage(tatolPages.count / ITEM_PER_PAGE)
    }

    const dataSupa = async () => {
        setIsLoading(true)
        const {from, to} = ItemsPerPage()
        const result = await supabase.from('naves').select("id, nombre_nave, fecha_arribo, fecha_atraque, fin_de_operaciones, puerto(puerto, origen(origen, abrev)), rubros(rubro, categoria_rubros(categoria_rubro)) ").range(from, to).order('id', {ascending: true})
        console.log(result.data)
        setNaves(result.data)
        setIsLoading(false)
       
    }

    useEffect(()=>{
        gettotalPages()
        dataSupa()

    }, [page])

    

    


 
    if(isLoading) return <Spinner />

    

    return (

      <>
          <Table hoverable={true} striped={true}>
            <Table.Head  >
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
                        <Table.Row key={nave.id}>
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
          <div className="items-center text-center">
          <Pagination  total={totalPage} onChange={(e)=>setPage(e)} initialPage={page} showControls />
          </div>
       
          </>
        
    )
}

export default ListNavesComponents


