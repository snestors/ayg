

export default function TooltipAgente({agente_naviero}) {
    if(agente_naviero) return (
        <div>
            <strong>{agente_naviero.direccion_legal}</strong>
            <p>{agente_naviero.distrito}, {agente_naviero.departamento}</p>
        </div>
    )
    if(!agente_naviero) return(<>No Info</>)

    
}