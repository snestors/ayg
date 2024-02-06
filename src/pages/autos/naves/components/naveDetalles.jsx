
import { Button,  Datepicker, Label, Modal, TextInput } from 'flowbite-react';
import { useAppContext } from '../../../../context/appContext';

function DetalleNaveComponent() {
    
    const {openModal, setOpenModal, dataModal }= useAppContext()
    
    console.log(dataModal)
    


    return (
        <>
          
          <Modal show={openModal}  popup onClose={() => setOpenModal(false)} >
            <Modal.Header  />
            <Modal.Body>
              <div className="space-y-2">
          
              <div>
                  <div className="block">
                    <Label value="Nave Descarga" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div>
                  <div className="block">
                    <Label htmlFor="password" value="Fecha Arribo" />
                  </div>
                  <Datepicker></Datepicker>
                </div>
                <div>
                  <div className="block">
                    <Label htmlFor="password" value="Fecha Atraque" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>

                <div>
                  <div className="block">
                    <Label htmlFor="password" value="Fecha Fin de Operacion" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div>
                  <div className="block">
                    <Label htmlFor="password" value="Estatus" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div>
                  <div className="block">
                    <Label htmlFor="password" value="Puerto" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div> <div>
                  <div className="block">
                    <Label htmlFor="password" value="Rubro" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                
                
                <Button></Button>

              </div>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default DetalleNaveComponent;

