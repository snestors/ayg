
import { Spinner, Table } from "flowbite-react"
import { formatearFechaHora } from "../../../../components/formatos/horadatetime"
import { useLoaderData, useNavigation } from "react-router-dom"
import { useAppContext } from "../../../../context/appContext"


function ListNavesComponents(){
    const navigate = useNavigation()    
    const {data } = useLoaderData()
    const naves = data
    const { setOpenModal, setDataModal }= useAppContext()

    if(navigate.state === "loading") return <Spinner />

    return (
        <>
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
                        <Table.Row key={nave.id} onClick={()=>{
                            console.log(nave.id)
                            setDataModal(nave)
                            setOpenModal(true)
                            
                        }}>
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
        
        </>

    )
}

export default ListNavesComponents


