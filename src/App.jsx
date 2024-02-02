import { useEffect } from "react";

import NavbarComponent from "./components/ui/header";
import { supabase } from "./lib/supabase";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";




function App() {

  const navigate = useNavigate()
  useEffect(()=>{
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
        if(!session) {
          navigate('/Login')
        }
      })

}, [navigate])
  return (

   <>
      <NavbarComponent/>      
        <Outlet/>
     </> 
  );
}

export default App;
