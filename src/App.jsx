

import NavbarComponent from "./components/ui/header";

import { Outlet } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";


function App() {
 
  
  return (
    <>
    <AppContextProvider>
    <NavbarComponent  />
    <div className="flex">
      <div className="flex-1 overflow-hidden">
        <Outlet />

      </div>
    </div>
    </AppContextProvider>
    </>
  );
}

export default App;
