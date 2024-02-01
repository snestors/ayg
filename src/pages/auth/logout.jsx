import { Button } from "flowbite-react";
import { supabase } from "../../lib/supabase";

function LogOut() {
    
    const handleLogout = () =>{
        supabase.auth.signOut()
    }

    return(
    <Button onClick={handleLogout}>Cerrar Session</Button>
        )
}

export default LogOut;