import * as React from 'react';

export default function Login() {
  let estilo = {color:"white"}
  return (
    <div>
      <label style={estilo}>Login:</label>
      <br />
      <input id="fname" name="fname" value="" />
      <br />
      <label style={estilo}>Senha:</label>
      <br />
      <input type="text" id="lname" name="lname" value="" />
      <br />
      <br />
      <input type="submit" value="Enviar" />
    </div>
  );
}
