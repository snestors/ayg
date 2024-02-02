import { Navbar } from "flowbite-react";
import ButtonDark from "./btn-dark";

function NavigationBar({ children }) {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      >
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mr-2">
            AyG
          </span>
          <ButtonDark></ButtonDark>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          npm run
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className="mt-11">{children}</main>
    </>
  );
}

export default NavigationBar;
