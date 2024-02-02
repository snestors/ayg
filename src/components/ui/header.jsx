
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { supabase } from '../../lib/supabase';
import ButtonDark from '../otros/btn-dark';
import isotipo from '../../assets/ISOTIPO.png'
import isotipoB from '../../assets/ISOTIPO- BLANCO.png'
import {  Link, } from 'react-router-dom'

function NavbarComponent() {

return (
    
    <Navbar fluid rounded className='sticky top-0 z-10'>
      <Navbar.Brand href="https://flowbite-react.com">
      <img src={isotipo} className="dark:hidden mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <img src={isotipoB} className="hidden dark:inline mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <ButtonDark ></ButtonDark>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          
         
          <Dropdown.Item onClick={()=>supabase.auth.signOut()}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/Autos">Autos</Navbar.Link>
        <Navbar.Link as={Link} to="/Graneles">Graneles</Navbar.Link>
        <Navbar.Link as={Link} to="/Administracion">Administracion</Navbar.Link>
        <Navbar.Link as={Link} to="/Sgs">SGS</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    
)
}

export default NavbarComponent;