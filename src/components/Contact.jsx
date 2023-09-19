import React, { useMemo, useState } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    text: ""
  })

  return (
    <div className='Contact'>
      <form>
        <div>
          <label>Nombre: </label>
          <input type='text' value={formData.name} placeholder='Su Nombre'></input>
        </div>
        <div>
          <label>Email: </label>
          <input type='email' value={formData.email} placeholder='Su Email'></input>
        </div>
        <div>
          <label>Numero de Telefono: </label>
          <input type='number' value={formData.phone} placeholder='Su Numero'></input>
        </div>
        <div>
          <label>Problema: </label>
          <input type='textarea' value={formData.text} placeholder='Que Paso'></input>
        </div>
      </form>
    </div>
  );
};

export default Contact