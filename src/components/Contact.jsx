import React, { useMemo, useState } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    text: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className='Contact'>
      <form onChange={handleChange}>
        <div>
          <label>Nombre: </label>
          <input type='text' name='name' value={formData.name} placeholder='Su Nombre'></input>
        </div>
        <div>
          <label>Email: </label>
          <input type='email' name='email' value={formData.email} placeholder='Su Email'></input>
        </div>
        <div>
          <label>Numero de Telefono: </label>
          <input type='number' name='phone' value={formData.phone} placeholder='Su Numero'></input>
        </div>
        <div>
          <label>Problema: </label>
          <input type='textarea' name='text' value={formData.text} placeholder='Que Paso'></input>
        </div>
        <button type='submit'>Entregar</button>
      </form>
    </div>
  );
};

export default Contact