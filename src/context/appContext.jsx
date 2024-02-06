import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState(null)

 

  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      userSet(session);

      if (!session) {
        navigate("/Login", { replace: true });
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userSet = async (session) => {
    try {
      if (session) {
        
        const userData = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id);
          
        setUser(userData.data[0]);
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        openModal,
        setOpenModal,
        setDataModal,
        dataModal

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
