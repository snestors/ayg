import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import Barcode from 'react-barcode';
import logo from '../assets/ISOTIPO.png'

const ImageGenerator = ({ vin, marca, modelo, color }) => {
  const imageRef = useRef(null);
  const [base64, setBase64] = useState("")

  const BtPrint = (data) => {
    console.log("brt")

    const intentScheme = "#Intent;scheme=rawbt;";
    const packageString = "package=ru.a402d.rawbtprinter;end;";
    const encodedData = encodeURI(data);
    setTimeout(() => {
      window.location.href = "intent:" + encodedData + intentScheme + packageString;
      
    }, 2000);
  };

  const generateAndPrintImage = async () => {
    // Ajusta la escala para mejorar la calidad de la imagen
    const scale = 2;

    await html2canvas(imageRef.current, { scale }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      
      // Llama a BtPrint con la información que deseas imprimir
      console.log("adsad")
      BtPrint(imgData);
      // Puedes guardar la imagen o realizar otras acciones con imgData si es necesario
      console.log(imgData);
      setBase64(imgData)
      return imgData;
    });
  };


  useEffect(()=>{
    
    console.log(base64)
  })

  return (
    <>
    
      <div
        ref={imageRef}
        style={{
          position: 'relative',
          width: '383px',
          height: '200px',
          paddingLeft: '50px',
          paddingTop: '5px',
          paddingRight: '5px',
          paddingBottom: '5px',
          fontSize: '22px',
          gap:'1px',
          display: 'flex',
          flexDirection: 'column',
        
        }}
      >
        <div>
          <Barcode format='CODE128' margin={0} displayValue={false} value={vin} width={1.8} height={30} />
        </div>
        <div>
          <strong>VIN:</strong> {vin}
        </div>
        <div>
          <strong>MARCA:</strong> {marca}
        </div>
        <div >
          <strong  style={{
          maxWidth: '350px',  // Establece el ancho máximo del texto a 350px
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>MODELO:</strong> {modelo}
        </div>
        <div  style={{
          maxWidth: '350px',  // Establece el ancho máximo del texto a 350px
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          <strong>COLOR:</strong> {color}
        </div>
        <img
        src={logo}
        
        style={{ width: '50px', height: 'auto', position: 'absolute', bottom: '0', right: '0' }}
      />
      </div>
       
      <button onClick={generateAndPrintImage} className="btn btn-danger m-0 ">Generar Imagen y Imprimir</button>
    </>
  );
};

export default ImageGenerator;