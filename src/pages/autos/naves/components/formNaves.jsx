

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Button, Modal } from 'flowbite-react';

import FormNavesBody from "./formNavesBody";
export default function FormNaves(){

    const [isOpen, setIsOpen] = useState(false)

    const handleClik = ()=>{
        setIsOpen(!isOpen)
        
        
    }
    
    const onSubmit = (data) =>{
      console.log(data)
    }

    return(<>
        <Button onClick={handleClik}>
            <IoMdAdd size={20} /> Agregar
          </Button>
          <Modal show={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Formulario Naves</Modal.Header>
        <Modal.Body>
         <FormNavesBody onSubmit></FormNavesBody>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit}>I accept</Button>
          <Button color="gray" onClick={() => setIsOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
         
    </>)
}


