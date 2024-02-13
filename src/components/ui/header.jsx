import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { supabase } from "../../lib/supabase";
import ButtonDark from "../otros/btn-dark";
import isotipo from "../../assets/ISOTIPO.png";
import isotipoB from "../../assets/ISOTIPO- BLANCO.png";
import { useLinkClickHandler, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

import { FaShip } from "react-icons/fa6";
//import { FcInspection } from "react-icons/fc";
import { RiShipFill } from "react-icons/ri";

function NavbarComponent() {
  const { user } = useAppContext();

  function AppNavLink(props) {
    const location = useLocation();
    const clickHandler = useLinkClickHandler(props.to);
    
    return (
      <span onClick={clickHandler}>
        <Navbar.Link href={props.to} active={location.pathname === props.to}>
          {props.text}
        </Navbar.Link>
      </span>
    );
  }

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src={isotipo}
          className="dark:hidden mr-3 h-9"
          alt="Flowbite React Logo"
        />
        <img
          src={isotipoB}
          className="hidden dark:inline mr-3 h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <ButtonDark></ButtonDark>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user && user.nombre}</span>
            <span className="block truncate text-sm font-medium">
              {user && user.correo}
            </span>
          </Dropdown.Header>

          <Dropdown.Item onClick={() => supabase.auth.signOut()}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <AppNavLink to="/" text="Home" />
        <Dropdown
          inline
          label={<AppNavLink to="/Autos" text="Autos" />}
          size="sm"
        >
          <Dropdown.Item icon={FaShip}>
            <AppNavLink to="Autos" text="Naves" />
          </Dropdown.Item>
          <Dropdown.Item icon={RiShipFill}>
            <AppNavLink to="/Autos/Embarques" text="Embarques" />
          </Dropdown.Item>
        </Dropdown>
        <AppNavLink to="/Graneles" text="Graneles" />
        <AppNavLink to="/Administracion" text="Administracion" />
        <AppNavLink to="/Sgs" text="Sgs" />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
