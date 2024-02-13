//import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

function Autos() {
  //!useMediaQuery({query: '(min-width: 768px)'})*
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="flex-1 overflow-y-auto m-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Autos;
