import * as React from 'react';

export default function Login() {
  let estilo = {color:"white"}
  return (
    <div>
      
      <label style={estilo}>Pesquisar:</label>
      <br />
      <input type="text" id="lname" name="lname" value="" />
      <br />
      <br />
      <input type="submit" value="Buscar" />
    </div>
  );
}