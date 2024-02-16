import { Button, Modal } from "flowbite-react";

import FormNavesBody from "./formNavesBody";
import { useState } from "react";
export default function FormNaves({ children, initState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  console.log(initState)

  const handleClik = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={handleClik}>{children}</Button>
      <Modal show={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Formulario Naves</Modal.Header>
        <Modal.Body>
          <FormNavesBody setIsOpen={setIsOpen} setIsLoading={setIsLoading}></FormNavesBody>
        </Modal.Body>
        <Modal.Footer>
          <Button isProcessing={isLoading} type="submit" form="form-naves">
            Guardar
          </Button>
          <Button color="gray" onClick={() => setIsOpen(false)}>
            {" "}
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
