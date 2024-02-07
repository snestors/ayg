import NavbarComponent from "./components/ui/header";

import { Outlet } from "react-router-dom";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <AppContextProvider>
      <div className="flex h-screen ">
        <div className="flex-1 flex flex-col overflow-hidden">
          <NavbarComponent></NavbarComponent>
          <div className="flex h-full">
            <main className="flex flex-col w-full  overflow-x-hidden overflow-y-auto mb-14">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
