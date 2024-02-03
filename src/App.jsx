import { useEffect } from "react";

import NavbarComponent from "./components/ui/header";
import { supabase } from "./lib/supabase";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAppContext } from "./context/appContext";

function App() {
  const { userSet } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    userSet();

    supabase.auth.onAuthStateChange((event, session) => {
      //console.log(event, session);
      if (!session) {
        navigate("/Login");
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <>
    <NavbarComponent  />
    <div className="flex">
      <div className="flex-1 overflow-hidden">
        <Outlet  />

      </div>
    </div>
      
    </>
  );
}

export default App;
