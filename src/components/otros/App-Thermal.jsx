
import { useEffect, useState } from "react"
import ImageGenerator from "./thermal.jsx"
import	{supabase} from '../../lib/supabase.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [vin, setVin] = useState();
  const [infVin, setInfoVin] = useState([])
  const [infoSticker, setInfoSticker] = useState(null);

  useEffect(()=>{
    

  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    getVine(vin)
    console.log(infVin)
  }

  

  async function getVine(vin){
    console.log(vin)
    await supabase.from("registro_general_sql").select('*').eq("CONSIGNATARIO", "DERCO").like('VIN',`%${vin}%`).limit(5).then((e)=>setInfoVin(e.data));
    //await setInfoVin(data)
    //console.log(infVin)
  }



  return (
    <div className="container mt-5">
      <form className="mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="vin"
          value={vin}
          onChange={(e) => {
            getVine(e.target.value);
            setVin(e.target.value);
          }}
          className="form-control mr-2"
        />
        <button type="submit" className="btn btn-primary mt-3">
          Buscar
        </button>
      </form>

      <ul className="list-group">
        {infVin.map((info) => (
          <li key={info.VIN} onClick={() => setInfoSticker(info)} className="list-group-item">
            {info.VIN} - {info.MARCA} - {info.MODELO}
          </li>
        ))}
      </ul>

      {infoSticker === null ? (
        <p className="mt-3">NO</p>
      ) : (
        <ImageGenerator
          color={"Gris - Azulado"}
          marca={"HONOR"}
          modelo={"CRT-LX3"}
          vin={"868446060780778"}
        />
      )}

      <button onClick={() => { setInfoVin([]); setVin(""); setInfoSticker(null); }} className="btn btn-danger m-3">
        Limpiar
      </button>
    </div>
  );
}

export default App
