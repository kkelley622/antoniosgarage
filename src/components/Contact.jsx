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
    <div className='form'>
      <h1>Contact Form</h1>
      <p>Please Fill Out this Form with the Required Information</p>
      <form onChange={handleChange}>
        <fieldset>
          <label for='name'>Nombre: </label>
          <input type='text' name='name' value={formData.name} placeholder='Su Nombre'></input>
        </fieldset>
        <fieldset>
          <label for='email'>Email: </label>
          <input type='email' name='email' value={formData.email} placeholder='Su Email'></input>
        </fieldset>
        <fieldset>
          <label for='phone'>Numero de Telefono: </label>
          <input type='number' name='phone' value={formData.phone} placeholder='Su Numero'></input>
        </fieldset>
        <fieldset>
          <label for='text'>Problema: </label>
          <input type='textarea' name='text' value={formData.text} placeholder='Que Paso'></input>
        </fieldset>
        <button type='submit'>Entregar</button>
      </form>
    </div>
  );
};

export default Contact