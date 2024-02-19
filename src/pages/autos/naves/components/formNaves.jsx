import { Button, Modal } from "flowbite-react";

import FormNavesBody from "./formNavesBody";
import { useEffect, useState } from "react";
export default function FormNaves({ children, initState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(()=>{
    if(initState) {
      setIsEdit(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <FormNavesBody setIsOpen={setIsOpen} setIsLoading={setIsLoading} initState={initState}></FormNavesBody>
        </Modal.Body>
        <Modal.Footer>
          <Button isProcessing={isLoading} type="submit" form="form-naves">
            {!isEdit ? "Guardar" : "Editar"}
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
