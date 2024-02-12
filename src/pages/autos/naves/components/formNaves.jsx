

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Button, Modal } from 'flowbite-react';

import FormNavesBody from "./formNavesBody";
export default function FormNaves(){

    const [isOpen, setIsOpen] = useState(false)

    const handleClik = ()=>{
        setIsOpen(!isOpen)
        
        
    }
    

    return(<>
        <Button onClick={handleClik}>
            <IoMdAdd size={20} /> Agregar
          </Button>
          <Modal show={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Formulario Naves</Modal.Header>
        <Modal.Body>
         <FormNavesBody></FormNavesBody>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>I accept</Button>
          <Button color="gray" onClick={() => setIsOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
         
    </>)
}


