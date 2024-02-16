import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function DeleteButton({ from, id, texto }) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const yes = async () => {
    try {
      
      await supabase.from(from).delete().eq("id", id);

      setOpenModal(false);
      navigate("/Autos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button  onClick={() => setOpenModal(true)}>
        <div className="flex gap-1 items-center">
          <FaTrashAlt /> Borrar
        </div>
      </Button>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {texto}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={yes}>
                {"Si, Estoy seguro"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
