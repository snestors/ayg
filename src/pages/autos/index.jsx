import { Sidebar } from "flowbite-react";

//import { useMediaQuery } from "react-responsive";
import { Outlet, useLinkClickHandler, useLocation } from "react-router-dom";
import { FaShip } from "react-icons/fa6";
import { FcInspection } from "react-icons/fc";
import { RiShipFill } from "react-icons/ri";


function Autos() {
  function AppNavLink(props) {
    const location = useLocation();

    const clickHandler = useLinkClickHandler(props.to);
    //console.log(location)

    return (
      <span onClick={clickHandler}>
        <Sidebar.Item
          icon={props.icon}
          href={props.to}
          active={location.pathname === props.to}
        >
          {props.text}
        </Sidebar.Item>
      </span>
    );
  }

  //!useMediaQuery({query: '(min-width: 768px)'})*
  return (
    <>
      <div className="flex h- h-screen overflow-hidden">
        <Sidebar collapsed={true} className="h-full overflow-y-auto">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <AppNavLink text={"Naves"} to={"Naves"} icon={FaShip} />
              <AppNavLink
                text={"Embarques"}
                to={"Embarques"}
                icon={RiShipFill}
              />
              <AppNavLink
                text={"Inspeccion"}
                to={"Inspeccion"}
                icon={FcInspection}
              />
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="flex-1 overflow-y-auto m-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Autos;
