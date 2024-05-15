import React from 'react'
import DocViewer from "react-doc-viewer";

const SistemaImplementado = () => {

  const docs = [
    { uri: require("../archivos/modificaciones.docx"), // Local File
      fileType: 'docx',
      fileName: 'modificaciones.docx'
    },
  ];


  return (
        <div className='sistemaImplementado'>
            <DocViewer documents={docs} />;
        </div>
  )
}

export default SistemaImplementado
