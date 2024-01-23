import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import Barcode from 'react-barcode';
import logo from '../assets/ISOTIPO.png'

const ImageGenerator = ({ vin, marca, modelo, color }) => {
  const imageRef = useRef(null);
  const BtPrint = (data) => {
    const intentScheme = "#Intent;scheme=rawbt;";
    const packageString = "package=ru.a402d.rawbtprinter;end;";
    const encodedData = encodeURI(data);

    window.location.href = "intent:" + encodedData + intentScheme + packageString;
  };

  const generateImage = () => {
    html2canvas(imageRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Puedes guardar la imagen o realizar otras acciones con imgData
      console.log(imgData);
    });
  };

  return (
    <>
    <div ref={imageRef} style={{
        position: 'relative',
        width: '48mm',
        height: '25mm',
        border: '1px solid black',
        padding: '1mm',
        fontSize: '15px', // Ajusta el tamaño de la fuente según sea necesario
        lineHeight: '1', // Ajusta el espaciado entre líneass
        display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
     }}>
      <div>
        <Barcode format='CODE128' margin={0} displayValue={false } value={vin} width={0.9} height={20} />
        <strong>VIN:</strong> {vin}
      </div>
      <div>
        <strong>MARCA:</strong> {marca}
      </div>
      <div>
        <strong>MODELO:</strong> {modelo}
      </div>
      <div>
        <strong>COLOR:</strong> {color}
      </div>
      <div>
       
      </div>
      <img
        src={logo}
        
        style={{ width: '50px', height: 'auto', position: 'absolute', bottom: '0', right: '0' }}
      />
    </div>
    
      <button onClick={generateImage}>Generar Imagen</button>
    </>
  );
};

export default ImageGenerator;
